import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable()
export class NavBarService {

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    toggleSubNavBar() {
        this.change.emit();
    }

}