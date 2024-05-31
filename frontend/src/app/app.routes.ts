import { Routes } from "@angular/router";
import { InicioComponent } from "./platfrom/components/inicio/inicio.component";
import { LoginComponent } from "./platfrom/components/auth/login/login.component";
import { RegisterComponent } from "./platfrom/components/auth/register/register.component";
import { ListadoActividadesComponent } from "./platfrom/components/actividades/listado-actividades/listado-actividades.component";
import { AdminIncioComponent } from "./platfrom/components/admin/admin-incio/admin-incio.component";
import { SolicitudesComponent } from "./platfrom/components/roles/consumidor/solicitudes/solicitudes.component";
import { ListaSoliComponent } from "./platfrom/components/roles/ofertante/lista-soli/lista-soli.component";
import { ListaActComponent } from "./platfrom/components/roles/consumidor/lista-act/lista-act.component";
import { ListaActComponentO } from "./platfrom/components/roles/ofertante/lista-act/lista-act.component";
import { PerfilComponent } from "./platfrom/components/templates/perfil/perfil.component";


export const routes: Routes = [
    {
        path: "",
        component: InicioComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "registro",
        component: RegisterComponent
    },
    {
        path: "actividades",
        component: ListadoActividadesComponent
    },
    {
        path: "panelDeAdministracion",
        component: AdminIncioComponent
    },
    {
        path: "solicitudes",
        component: SolicitudesComponent
    },
    {
        path: "lista-solicitudes",
        component: ListaSoliComponent
    },
    {
        path: "actividades/usuario",
        component: ListaActComponent
    },
    {
        path: "actividades/usuario/ofertante",
        component: ListaActComponentO
    },


];
