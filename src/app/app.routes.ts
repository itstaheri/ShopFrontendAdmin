import { Routes } from '@angular/router';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [


 
    {
        component:LoginComponent,
        path:'auth'
    },
    {
        component:MainComponent,
        path:'',
        children : [
            
                {
                    component:FormComponent,
                    path : 'form'
                },
                {

                    component: DashbordComponent,
                    path : "dashbord"
                }
            
        ]
    }
   
];
 