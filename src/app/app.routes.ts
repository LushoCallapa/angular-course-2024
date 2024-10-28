import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AuthGuard } from './guards/auth.guard';
import { GuardForm } from './guards/guard-form.guard';

export const routes: Routes = [
    {
        path: 'card/:studentId',
        component: UserCardComponent,
        title: 'user card test tilte'
    },
    {
        path: 'calculator',
        component: CalculatorComponent,
        canDeactivate: [GuardForm]
    },
    {
        path: 'counter',
        loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent)
    },
    {
        path: 'student',
        title: 'Student',
        canActivate: [AuthGuard],
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    }
];
