import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import operatorRoutes from "./routes/operator/operator.route.js";


import engineerRoutes from "./routes/engineer/engineer.routes.js";
import companyRoutes from "./routes/company/company.routes.js";

// Product routes imports would go here
import productRoutes from "./routes/product/product.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

import servicesRoutes from "./routes/service/service.routes.js";
import engineeringRoutes from "./routes/service/engineering.routes.js";
import packageRoutes from "./routes/service/package.routes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(express.json());

// 🔹 Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads", "company-logos");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// 🔹 Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.use("/api/engineers", engineerRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/operators", operatorRoutes);


//service routes
app.use("/api/services", servicesRoutes);
app.use("/api/services/engineering", engineeringRoutes);
app.use("/api/services/packages", packageRoutes);

// Product routes
app.use("/api/v1/products", productRoutes);

// Error handler (ALWAYS LAST)
app.use(errorHandler);

export default app;
