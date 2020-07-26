import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BeansDetail } from '../shared/models/beans.model';
import { BeansService } from './beans.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<BeansDetail> {

  constructor(
    private beansService: BeansService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.beansService.getDetailById(route.params?.id);
  }
}
