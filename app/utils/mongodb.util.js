const { MongoClient } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        try {
            this.client = await MongoClient.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("✅ Connected to MongoDB");
            return this.client;
        } catch (error) {
            console.error("❌ MongoDB connection failed:", error.message);
            return null; // hoặc throw error nếu bạn muốn dừng hẳn
        }
    }
}

module.exports = MongoDB;
