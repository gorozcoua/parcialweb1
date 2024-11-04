import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CafesListComponent } from './cafes-list.component'; // Adjust the import path accordingly
import { faker } from '@faker-js/faker'; // Asegúrate de importar Faker

describe('CafeListComponent', () => {
  let component: CafesListComponent;
  let fixture: ComponentFixture<CafesListComponent>;

  /*const cafes = [
    {
      id: 1,
      nombre: 'Café A',
      tipo: 'origen',
      region: 'Colombia',
      sabor: 'fruity',
      altura: 1200,
      imagen: 'path/to/imageA.jpg'
    },
    {
      id: 2,
      nombre: 'Café B',
      tipo: 'blend',
      region: 'Brasil',
      sabor: 'chocolatey',
      altura: 800,
      imagen: 'path/to/imageB.jpg'
    },
    {
      id: 3,
      nombre: 'Café C',
      tipo: 'origen',
      region: 'Perú',
      sabor: 'nutty',
      altura: 1000,
      imagen: 'path/to/imageC.jpg'
    }
  ];*/

  const cafes = Array.from({ length: 3 }).map((_, index) => ({
    id: index + 1,
    nombre: faker.commerce.productName(),
    tipo: faker.helpers.arrayElement(['origen', 'blend']),
    region: faker.address.country(),
    sabor: faker.commerce.productAdjective(),
    altura: index,
    imagen: faker.image.urlPicsumPhotos(), // Cambia aquí a faker.image.image()
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      declarations: [CafesListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesListComponent);
    component = fixture.componentInstance;
   
    component.cafes = cafes;

    fixture.detectChanges(); 
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('La tabla se crea correctamente con 3 filas más el encabezado', () => {
    const headerCells = fixture.debugElement.queryAll(By.css('thead th'));
    expect(headerCells.length).toBe(4); // 4 columnas en el encabezado

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3); // 3 filas en la tabla
  });
  
});
