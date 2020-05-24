import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export abstract class myService extends BehaviorSubject<GridDataResult> {
    public loading: boolean;

    
    constructor(
        private http: HttpClient,
        protected tableName: string
    ) {
        super(null);
    }

    public query(state: any): void {
        this.fetch(this.tableName, state)
            .subscribe(x => super.next(x));
    }

    protected fetch(tableName: string, state: any): Observable<GridDataResult> {
        const queryStr = `${toODataString(state)}&$count=true`;
        this.loading = true;

        return this.http
            .get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=iBF1wT74GchHz8TMkvbk8dTnT3lRjOQE`)
            .pipe(
                map(response => (<GridDataResult>{
                    data: response['results'],
                    total: parseInt(response['@odata.count'], 50)
                })),
                tap(() => this.loading = false)
            )
            
    }
}


@Injectable()
export class CategoriesService extends myService  {
    constructor(http: HttpClient) { super(http, 'Categories'); }

    queryAll(st?: any): Observable<GridDataResult> {
        const state = Object.assign({}, st);
        delete state.skip;
        delete state.take;

        return this.fetch(this.tableName, state);
    }
}
