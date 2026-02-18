import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { STAT_GROUPS, StatGroup } from './stats-data';

@Component({
  selector: 'app-stats',
  imports: [NgFor, MatCheckboxModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  readonly groups: StatGroup[] = STAT_GROUPS;

  get totalGoals(): number {
    return this.groups.reduce(
      (sum, group) =>
        sum + group.sections.reduce((sectionSum, section) => sectionSum + section.goals.length, 0),
      0
    );
  }

  get completedGoals(): number {
    return this.groups.reduce(
      (sum, group) =>
        sum +
        group.sections.reduce(
          (sectionSum, section) => sectionSum + section.goals.filter((goal) => goal.completed).length,
          0
        ),
      0
    );
  }

}
