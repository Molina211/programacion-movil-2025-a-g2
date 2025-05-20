import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByNombre',
  standalone: true
})
export class OrderByNombrePipe implements PipeTransform {
  transform(estudiantes: any[]): any[] {
    if (!Array.isArray(estudiantes)) return estudiantes;
    return estudiantes.slice().sort((a, b) => {
      const nombreA = `${a.primernombre || ''} ${a.segundonombre || ''} ${a.primerapellido || ''}`.trim().toLowerCase();
      const nombreB = `${b.primernombre || ''} ${b.segundonombre || ''} ${b.primerapellido || ''}`.trim().toLowerCase();
      return nombreA.localeCompare(nombreB);
    });
  }
}
