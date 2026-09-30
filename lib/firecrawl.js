import { Firecrawl } from "firecrawl";

const firecrawl = new Firecrawl({
    apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function scrapeProduct(url) {
    try {
        const result = await firecrawl.scrape(url, {
            formats: [
                {
                    type: "json",
                    schema: {
                        type: "object",
                        properties: {
                            productName: {
                                type: "string",
                            },
                            currentPrice: {
                                type: "number",
                            },
                            currencyCode: {
                                type: "string",
                            },
                            productImageUrl: {
                                type: "string",
                            },
                        },
                        required: ["productName", "currentPrice"],
                    },
                    prompt:
                        "Extract the product name, current price, currency code, and product image URL from this product page. Return the current price as a number.",
                },
            ],
        });

        const extractedData = result.json;

        if (!extractedData || !extractedData.productName) {
            throw new Error("No product data extracted from URL");
        }

        if (extractedData.currentPrice === undefined || extractedData.currentPrice === null) {
            throw new Error("No current price extracted from URL");
        }

        return extractedData;
    } catch (error) {
        console.error("Firecrawl scrape error:", error);

        throw new Error(`Failed to scrape product: ${error.message}`);
    }
}