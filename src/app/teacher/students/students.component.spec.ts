import { NO_ERRORS_SCHEMA } from "@angular/core";
import { StudentsComponent } from "./students.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("StudentsComponent", () => {

  let fixture: ComponentFixture<StudentsComponent>;
  let component: StudentsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [StudentsComponent]
    });

    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
