import { Routes } from '@angular/router';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';

export const routes: Routes = [
    { path: 'staff', component: PersonListComponent },
    { path: 'person-details/:id', component: PersonDetailsComponent},
    { path: '', redirectTo: '/staff', pathMatch: "full" }
];
