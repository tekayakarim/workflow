import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { authInterceptorProviders } from "./interceptor/auth-interceptor.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { DemandePapierComponent } from "./component/employe/demande-papier/demande-papier.component";
import { DemandeVoitureComponent } from "./component/employe/demande-voiture/demande-voiture.component";
import { MesDemandesPapierComponent } from "./component/employe/mes-demandes-papier/mes-demandes-papier.component";
import { MesDemandesVoitureComponent } from "./component/employe/mes-demandes-voiture/mes-demandes-voiture.component";
import { LoginComponent } from "./component/shared/login/login.component";
import { NavbarComponent } from "./component/shared/navbar/navbar.component";
import { DemandesVoitureChefHierarchiqueComponent } from "./component/chef-hierarchqiue/demandes-voiture-chef-hierarchique/demandes-voiture-chef-hierarchique.component";
import { DemandesPapierChefHierarchiqueComponent } from "./component/chef-hierarchqiue/demandes-papier-chef-hierarchique/demandes-papier-chef-hierarchique.component";
import { ModifierDemandeComponent } from "./component/employe/modifier-demande/modifier-demande.component";
import { RefuseConfirmationModalComponent } from "./component/chef-hierarchqiue/modal/refuse-confirmation-modal/refuse-confirmation-modal.component";
import { AcceptConfirmationModalComponent } from "./component/chef-hierarchqiue/modal/accept-confirmation-modal/accept-confirmation-modal.component";
import { RevisionConfirmationModalComponent } from "./component/chef-hierarchqiue/modal/revision-confirmation-modal/revision-confirmation-modal.component";
import { DetailDemandeDocumentChefHierarchiqueComponent } from "./component/chef-hierarchqiue/detail-demande-document-chef-hierarchique/detail-demande-document-chef-hierarchique.component";
import { AssignerDemandeComponent } from "./component/chef-daaf/assigner-demande/assigner-demande.component";
import { PageNotFoundComponent } from "./component/shared/page-not-found/page-not-found.component";
import { DemandeDocumentDaafComponent } from "./component/chef-daaf/demande-document-daaf/demande-document-daaf.component";
import { AllUsersComponent } from "./component/admin/all-users/all-users.component";
import { AjouterUserComponent } from "./component/admin/modal/ajouter-user/ajouter-user.component";
import { DeleteUserConfirmationComponent } from "./component/admin/modal/delete-user-confirmation/delete-user-confirmation.component";
import { DeleteComfirmationModalComponent } from "./component/employe/modal/delete-comfirmation-modal/delete-comfirmation-modal.component";
import { AllComponent } from "./component/employe/mes-demandes-papier/all/all.component";
import { NewComponent } from "./component/employe/mes-demandes-papier/new/new.component";
import { AcceptedComponent } from "./component/employe/mes-demandes-papier/accepted/accepted.component";
import { RefusedComponent } from "./component/employe/mes-demandes-papier/refused/refused.component";
import { TocheckComponent } from "./component/employe/mes-demandes-papier/tocheck/tocheck.component";

import { AllDemandesAgentDaafComponent } from "./component/agent-daaf/all-demandes-agent-daaf/all-demandes-agent-daaf.component";
import { ModalDemandeRecuperationComponent } from "./component/agent-daaf/modal/modal-demande-recuperation/modal-demande-recuperation.component";
import { DetailDemandeAgentDaafComponent } from "./component/agent-daaf/detail-demande-agent-daaf/detail-demande-agent-daaf.component";
import { RefuseDemandeVoitureComponent } from "./component/chef-parc/modal/refuse-demande-voiture/refuse-demande-voiture.component";
import { AssignerVoitureComponent } from "./component/chef-parc/assigner-voiture/assigner-voiture.component";
import { HistoriaqueVoitureComponent } from "./component/chef-parc/historiaque-voiture/historiaque-voiture.component";
import { DemandeVoitureChefParcComponent } from "./component/chef-parc/demande-voiture-chef-parc/demande-voiture-chef-parc.component";
import { ModifierDemandeArComponent } from "./component/employe/modifier-demande-ar/modifier-demande-ar.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { AllDemandesComponent } from "./component/employe/mes-demandes-voiture/all-demandes/all-demandes.component";
import { AcceptedDemandesComponent } from "./component/employe/mes-demandes-voiture/accepted-demandes/accepted-demandes.component";
import { NewDemandesComponent } from "./component/employe/mes-demandes-voiture/new-demandes/new-demandes.component";
import { RefusedDemandesComponent } from "./component/employe/mes-demandes-voiture/refused-demandes/refused-demandes.component";
import { TocheckDemandesComponent } from "./component/employe/mes-demandes-voiture/tocheck-demandes/tocheck-demandes.component";
import { DetailDemandeVoitureChefHierarchiqueComponent } from "./component/chef-hierarchqiue/detail-demande-voiture-chef-hierarchique/detail-demande-voiture-chef-hierarchique.component";
import { AcceptConfirmationModalVoitureComponent } from "./component/chef-hierarchqiue/modal/accept-confirmation-modal-voiture/accept-confirmation-modal-voiture.component";
import { RefuseConfirmationModalVoitureComponent } from "./component/chef-hierarchqiue/modal/refuse-confirmation-modal-voiture/refuse-confirmation-modal-voiture.component";
import { RevisionConfirmationModalVoitureComponent } from "./component/chef-hierarchqiue/modal/revision-confirmation-modal-voiture/revision-confirmation-modal-voiture.component";
import { DeleteConfirmationModalVoitureComponent } from "./component/employe/modal/delete-confirmation-modal-voiture/delete-confirmation-modal-voiture.component";
import { MesVoituresComponent } from "./component/chef-parc/mes-voitures/mes-voitures.component";
import { AddVoitureComponent } from "./component/chef-parc/add-voiture/add-voiture.component";
import { RendreVoitureComponent } from "./component/employe/rendre-voiture/rendre-voiture.component";
import { RendreVoitureConfirmationModalComponent } from "./component/employe/modal/rendre-voiture-confirmation-modal/rendre-voiture-confirmation-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    DemandePapierComponent,
    DemandeVoitureComponent,
    MesDemandesPapierComponent,
    MesDemandesVoitureComponent,
    LoginComponent,
    NavbarComponent,
    DemandesVoitureChefHierarchiqueComponent,
    DemandesPapierChefHierarchiqueComponent,
    DeleteComfirmationModalComponent,
    ModifierDemandeComponent,
    RefuseConfirmationModalComponent,
    AcceptConfirmationModalComponent,
    RevisionConfirmationModalComponent,
    DetailDemandeDocumentChefHierarchiqueComponent,
    AssignerDemandeComponent,
    PageNotFoundComponent,
    DemandeDocumentDaafComponent,
    AllUsersComponent,
    AjouterUserComponent,
    DeleteUserConfirmationComponent,
    MesVoituresComponent,
    AllComponent,
    NewComponent,
    AcceptedComponent,
    RefusedComponent,
    TocheckComponent,
    AllDemandesAgentDaafComponent,
    ModalDemandeRecuperationComponent,
    DetailDemandeAgentDaafComponent,
    RefuseDemandeVoitureComponent,
    AssignerVoitureComponent,
    HistoriaqueVoitureComponent,
    DemandeVoitureChefParcComponent,
    ModifierDemandeArComponent,
    AllDemandesComponent,
    AcceptedDemandesComponent,
    NewDemandesComponent,
    RefusedDemandesComponent,
    TocheckDemandesComponent,
    AllDemandesComponent,
    NewDemandesComponent,
    AcceptedDemandesComponent,
    RefusedDemandesComponent,
    TocheckDemandesComponent,
    DetailDemandeVoitureChefHierarchiqueComponent,
    AcceptConfirmationModalVoitureComponent,
    RefuseConfirmationModalVoitureComponent,
    RevisionConfirmationModalVoitureComponent,
    DeleteConfirmationModalVoitureComponent,
    MesVoituresComponent,
    AddVoitureComponent,
    RendreVoitureComponent,
    RendreVoitureConfirmationModalComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
