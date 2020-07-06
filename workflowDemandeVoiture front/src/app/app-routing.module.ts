import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/shared/login/login.component";
import { NavbarComponent } from "angular-bootstrap-md";
import { DemandePapierComponent } from "./component/employe/demande-papier/demande-papier.component";
import { DemandeVoitureComponent } from "./component/employe/demande-voiture/demande-voiture.component";
import { MesDemandesPapierComponent } from "./component/employe/mes-demandes-papier/mes-demandes-papier.component";
import { MesDemandesVoitureComponent } from "./component/employe/mes-demandes-voiture/mes-demandes-voiture.component";
import { DemandesPapierChefHierarchiqueComponent } from "./component/chef-hierarchqiue/demandes-papier-chef-hierarchique/demandes-papier-chef-hierarchique.component";
import { DemandesVoitureChefHierarchiqueComponent } from "./component/chef-hierarchqiue/demandes-voiture-chef-hierarchique/demandes-voiture-chef-hierarchique.component";
import { ModifierDemandeComponent } from "./component/employe/modifier-demande/modifier-demande.component";
import { AssignerVoitureComponent } from "./component/chef-parc/assigner-voiture/assigner-voiture.component";

import { AuthGuardService as AuthGuard } from "./service/auth-guard.service";
import { RoleGuardService as RoleGurad } from "./service/role-guard.service";
import { DetailDemandeDocumentChefHierarchiqueComponent } from "./component/chef-hierarchqiue/detail-demande-document-chef-hierarchique/detail-demande-document-chef-hierarchique.component";
import { AssignerDemandeComponent } from "./component/chef-daaf/assigner-demande/assigner-demande.component";
import { DemandeDocumentDaafComponent } from "./component/chef-daaf/demande-document-daaf/demande-document-daaf.component";
import { AllUsersComponent } from "./component/admin/all-users/all-users.component";
import { MesVoituresComponent } from "./component/chef-parc/mes-voitures/mes-voitures.component";
import { PageNotFoundComponent } from "./component/shared/page-not-found/page-not-found.component";
import { AllComponent } from "./component/employe/mes-demandes-papier/all/all.component";
import { NewComponent } from "./component/employe/mes-demandes-papier/new/new.component";
import { AcceptedComponent } from "./component/employe/mes-demandes-papier/accepted/accepted.component";
import { RefusedComponent } from "./component/employe/mes-demandes-papier/refused/refused.component";
import { TocheckComponent } from "./component/employe/mes-demandes-papier/tocheck/tocheck.component";
import { AllDemandesAgentDaafComponent } from "./component/agent-daaf/all-demandes-agent-daaf/all-demandes-agent-daaf.component";
import { DetailDemandeAgentDaafComponent } from "./component/agent-daaf/detail-demande-agent-daaf/detail-demande-agent-daaf.component";
import { DemandeVoitureChefParcComponent } from "./component/chef-parc/demande-voiture-chef-parc/demande-voiture-chef-parc.component";
import { ModifierDemandeArComponent } from "./component/employe/modifier-demande-ar/modifier-demande-ar.component";
import { AllDemandesComponent } from "./component/employe/mes-demandes-voiture/all-demandes/all-demandes.component";
import { AcceptedDemandesComponent } from "./component/employe/mes-demandes-voiture/accepted-demandes/accepted-demandes.component";
import { NewDemandesComponent } from "./component/employe/mes-demandes-voiture/new-demandes/new-demandes.component";
import { RefusedDemandesComponent } from "./component/employe/mes-demandes-voiture/refused-demandes/refused-demandes.component";
import { TocheckDemandesComponent } from "./component/employe/mes-demandes-voiture/tocheck-demandes/tocheck-demandes.component";
import { DetailDemandeVoitureChefHierarchiqueComponent } from "./component/chef-hierarchqiue/detail-demande-voiture-chef-hierarchique/detail-demande-voiture-chef-hierarchique.component";
import { AddVoitureComponent } from "./component/chef-parc/add-voiture/add-voiture.component";
import { HistoriaqueVoitureComponent } from "./component/chef-parc/historiaque-voiture/historiaque-voiture.component";
import { RendreVoitureComponent } from "./component/employe/rendre-voiture/rendre-voiture.component";
const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full",
  },
  {
    path: "navbar",
    component: NavbarComponent,
  },
  {
    path: "demande-papier",
    component: DemandePapierComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "demande-voiture",
    component: DemandeVoitureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "mes-demandes-papier",
    component: MesDemandesPapierComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "all", pathMatch: "full" },
      { path: "all", component: AllComponent },
      { path: "new", component: NewComponent },
      { path: "accepted", component: AcceptedComponent },
      { path: "refused", component: RefusedComponent },
      { path: "tocheck", component: TocheckComponent },
    ],
  },
  {
    path: "mes-demandes-voiture",
    component: MesDemandesVoitureComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "all-demandes", pathMatch: "full" },
      { path: "all-demandes", component: AllDemandesComponent },
      { path: "new-demandes", component: NewDemandesComponent },
      { path: "accepted-demandes", component: AcceptedDemandesComponent },
      { path: "refused-demandes", component: RefusedDemandesComponent },
      { path: "tocheck-demandes", component: TocheckDemandesComponent },
    ],
  },
  {
    path: "demandes-papier-chef-hierarchique",
    component: DemandesPapierChefHierarchiqueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "rendre-voiture",
    component: RendreVoitureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "demandes-voiture-chef-hierarchique",
    component: DemandesVoitureChefHierarchiqueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "modifier-demande/:id",
    component: ModifierDemandeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "modifier-demande-ar/:id",
    component: ModifierDemandeArComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "detail-demande-doc-chef/:id",
    component: DetailDemandeDocumentChefHierarchiqueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "detail-demande-voiture-chef/:id",
    component: DetailDemandeVoitureChefHierarchiqueComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "assigner-demande/:id",
    component: AssignerDemandeComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_CHEFDAAF",
    },
  },
  {
    path: "demande-document-daaf",
    component: DemandeDocumentDaafComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_CHEFDAAF",
    },
  },
  {
    path: "all-users",
    component: AllUsersComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_ADMIN",
    },
  },
  {
    path: "all-voitures",
    component: MesVoituresComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_CHEFPARK",
    },
  },
  {
    path: "add-voiture",
    component: AddVoitureComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_CHEFPARK",
    },
  },
  {
    path: "all-demandes-agent-daaf",
    component: AllDemandesAgentDaafComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_AGENTDAAF",
    },
  },
  {
    path: "detail-demande-agent-daaf",
    component: DetailDemandeAgentDaafComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_AGENTDAAF",
    },
  },
  {
    path: "demande-voiture-chef-parc",
    component: DemandeVoitureChefParcComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_CHEFPARK",
    },
  },
  {
    path: "assigner-voiture/:id",
    component: AssignerVoitureComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_CHEFPARK",
    },
  },
  {
    path: "historique-voiture",
    component: HistoriaqueVoitureComponent,
    canActivate: [RoleGurad],
    data: {
      expectedRole: "ROLE_CHEFPARK",
    },
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
