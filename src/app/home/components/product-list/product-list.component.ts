import {
  style,
  trigger,
  state,
  query,
  transition,
  animate,
  AnimationEvent,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

export interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() list: Product[] = [];
  @Input() withAnimation: boolean = true;
  @Output() clickProduct = new EventEmitter();

  @Input() targetPosX: string = '352';
  @Input() targetPosY: string = '29';

  constructor(private rd2: Renderer2) {}

  activeId: number = -1;
  horizontalDis: string = '500';
  verticalDis: string = '500';

  formatCurrency(price: number) {
    return `$ ${price.toLocaleString('en-CA')}`;
  }

  handleClickProduct(product: Product, ev: MouseEvent) {
    this.clickProduct.emit(product);
  }

  handleClickCart(ev: any) {
    let uat = navigator.userAgent;
    let isAndroid = uat.indexOf('Android') > -1 || uat.indexOf('Linux') > -1;
    if (isAndroid) {
      window.navigator.vibrate(200);
    }
    const disX = ev.pageX - ev.target.offsetWidth / 2;
    const disY = ev.pageY - ev.target.offsetHeight / 2;
    const moveIcon = this.rd2.createElement('img');
    moveIcon.style.position = 'absolute';
    moveIcon.style.left = '0';
    moveIcon.style.top = '0';
    moveIcon.style.backgroundColor = 'Black';
    moveIcon.style.borderRadius = '50%';
    moveIcon.style.opacity = '30%';
    moveIcon.style.width = '12px';
    moveIcon.style.height = '12px';
    moveIcon.style.transform = 'translate(' + disX + 'px,' + disY + 'px)';
    moveIcon.style.transition = 'transform .3s';
    moveIcon.style.transitionTimingFunction = 'cubic-bezier(0.55,0,0.85,.36)';
    this.rd2.appendChild(document.body, moveIcon);
    setTimeout(() => {
      moveIcon.style.transform =
        'translate(' + this.targetPosX + 'px,' + this.targetPosY + 'px)';
    }, 0);
    moveIcon.ontransitionend = function () {
      this.remove();
    };
  }
}
