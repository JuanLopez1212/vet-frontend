import { Routes } from '@angular/router';
import { PetsHome } from './pages/private/pets/pets-home/pets-home';
import { CreatePet } from './pages/private/pets/create-pet/create-pet';
import { OwnersHome } from './pages/private/owners/owners-home/owners-home';
import { CreateOwner } from './pages/private/owners/create-owner/create-owner';
import { DatesHome } from './pages/private/dates/dates-home/dates-home';
import { CreateDate } from './pages/private/dates/create-date/create-date';
import { VetHome } from './pages/private/vets/vet-home/vet-home';
import { CreateVet } from './pages/private/vets/create-vet/create-vet';
import { PetDates } from './pages/private/pets/pet-dates/pet-dates';

export const routes: Routes = [
    { path: 'pets', component: PetsHome },
    { path: 'pets/create', component: CreatePet},
    { path: 'owners', component: OwnersHome },
    { path: 'owners/create', component: CreateOwner },
    { path: 'dates', component: DatesHome },
    { path: 'dates/create', component: CreateDate },
    { path: 'vets', component: VetHome },
    { path: 'vets/create', component: CreateVet },
    { path: 'pets/:id/dates', component: PetDates }
];
