import { StudentService } from "./student.service";
import { TestBed } from "@angular/core/testing";

describe("StudentService", () => {

  let service: StudentService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentService
      ]
    });
    service = TestBed.get(StudentService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
