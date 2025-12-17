import express from "express";
import { ApplicationRepository } from "../repository/applicationRepository.js";
import mongoose from "mongoose";

const Router = express.Router();

Router.get("/application", async (req, res) => {
    const applicationId = req.query.id;
    const id = new mongoose.Types.ObjectId(applicationId);
    try {
        const result = await ApplicationRepository.getApplication(id);
        if (result.success) {
            res.status(200).json({
                success: true,
                data: result.data
            })
        } else {
            res.status(404).json({
                success: false,
                message: result.message
            })
        }
    } catch (error){
        res.status(500).json({
            success: false,
            message: 'Error internal server'
        })
    }
})

Router.post("/application/exist", async (req, res) => {
    const { candidateId, jobId } = req.body;
    try {
        const result = await ApplicationRepository.isApplicationExists(candidateId, jobId);
        if (result.success) {
            res.status(200).json({
                success: true,
                exists: result.exists
            })
        } else {
            res.status(404).json({
                success: false,
                message: result.message
            })
        }
    } catch (error){
        res.status(500).json({
            success: false,
            message: 'Error internal server'
        })
    }
})

export default Router;