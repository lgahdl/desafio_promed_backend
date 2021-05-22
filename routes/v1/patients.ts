import express from 'express';
import PatientsService from "../../services/patients.service.interface";
import { Container, Inject } from 'typedi';

const router = express.Router();

const patientsService = Container.get<PatientsService>('patients.service');

router.get("/", async (req, res, next) => {
	try {
		const response = await patientsService.findAll();
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const response = await patientsService.findById(parseInt(req.params.id));
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const response = await patientsService.post(req.body);
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const response = await patientsService.put(req.body);
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const response = await patientsService.delete(parseInt(req.params.id));
		return res.send(response);
	} catch (error) {
		return next(error);
	}
});

export default router;