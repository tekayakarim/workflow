package com.pfe.main.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pfe.main.entity.Voiture;
import com.pfe.main.repository.VoitureRepository;
import com.pfe.main.service.VoitureService;
@Service
public class VoitureServiceImpl implements VoitureService {

	@Autowired
	VoitureRepository voitureRepository;
	@Override
	public String addVoiture(Voiture voiture) {
		
		try {
			voitureRepository.save(voiture);
			return "voiture added";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "fail";
	}

	@Override
	public String deleteVoiture(String matricule) {
		try {
			Voiture voi=voitureRepository.findByMatricule(matricule);
			voitureRepository.delete(voi);
			return "voiture deleted";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "fail";
	}

	@Override
	public Voiture getVoiture(long id) {
		
		return voitureRepository.findByid(id);
	}




}
