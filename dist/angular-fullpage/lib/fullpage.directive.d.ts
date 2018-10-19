import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
export declare class FullpageDirective implements OnInit, OnDestroy {
    id: any;
    options: any;
    ref: EventEmitter<{}>;
    fullpage_api: any;
    constructor();
    ngOnInit(): void;
    initFullpage(): void;
    addBuildFunction(): void;
    destroyFullpage(): void;
    ngOnDestroy(): void;
}