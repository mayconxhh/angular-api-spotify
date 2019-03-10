import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutPhoto'
})
export class WithoutPhotoPipe implements PipeTransform {

  transform(images: any): any {
    if (!images) {
    	return 'assets/img/noimage.png';
    }

    if (images.length>0) {
    	return images[0].url;
    } else {
    	return 'assets/img/noimage.png';
    }
  }

}
