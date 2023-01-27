export interface IEmployee {
    EmployeeID: number,
    EmpFirstName: string,
    EmpLastName: string,
    EmpAddress: string,
    StateID: number,
    CityID: number,
    DepartmentID: number,
    CityObj: {
      CityID: number,
      CityName: string
    },
    StateObj: {
      StateID: number,
      StateName: string,
      StateAbbreviation: string
    },
    DepartmentObj: {
      DepartmentID: number,
      DepartmentName: string
    }
  }