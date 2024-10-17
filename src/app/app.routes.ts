import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    {
        path: 'user-card',
        component: UserCardComponent
    },
    {
        path: 'calculator',
        component: CalculatorComponent
    },
    {
        path: 'counter',
        loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent)
    },
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    }
];
