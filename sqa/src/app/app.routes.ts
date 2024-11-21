import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EntryComponent } from './pages/entry/entry.component';
import { LayoutComponent } from './res-ui/layout/layout.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: '', component: EntryComponent},
        {path: 'search', component: SearchPageComponent},
        {path: 'history', component: HistoryPageComponent},
    ]},
    
    {path: 'login', component: LoginComponent}
];
