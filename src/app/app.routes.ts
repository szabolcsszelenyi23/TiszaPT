import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ElectionComponent } from './election/election.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [
	{ path: '', component: MainComponent },
	{ path: 'election', component: ElectionComponent },
	{ path: 'stats', component: StatsComponent },
	{ path: '**', redirectTo: '' }
];
//
