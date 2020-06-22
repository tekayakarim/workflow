package com.pfe.main.service;

import java.util.List;

import com.pfe.main.entity.DemandeDocument;

public interface DemandeDocumentService {
public String CreateDemande(DemandeDocument demandeDocument);
public DemandeDocument getDemande(long id);
public String updateDemande(DemandeDocument demandeDocument);
public List<DemandeDocument> getAllDemande();
public String deleteDemande(long id);
public List<DemandeDocument> getAllDemandeByEmploye(String userName); 
public String returnEmailById(long id);
}
