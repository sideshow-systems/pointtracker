import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PerformanceVoteComponent } from '../../components';

@Component({
	selector: 'pt-performance-vote-dialog',
	templateUrl: './performance-vote-dialog.component.html',
	styleUrls: ['./performance-vote-dialog.component.scss'],
})
export class PerformanceVoteDialogComponent {

	vote: number = 3;

	constructor(
		private _dialogRef: MatDialogRef<PerformanceVoteComponent>,
	) {}

	setVote(vote: number): void {
		this.vote = vote;
	}

	closeDialog() {
		this._dialogRef.close({
			vote: this.vote,
		});
	}
}
