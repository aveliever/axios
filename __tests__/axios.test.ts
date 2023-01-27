import AxiosDriver from '../src/axios-driver';
import { IAxiosDriver } from '../src';
import employeeJson from './Employee.json'
import { IEmployee } from './IEmployee'

describe('Axios Tests', () => {

    const magenicAutomationApiBaseUrl = `http://magenicautomation.azurewebsites.net:80`;

    const magenicAutomationApiGet = `/api/EmployeesAPI/GetEmployees`;
    const magenicAutomationApiPost = `/api/EmployeesAPI/PostEmployee`;
    const magenicAutomationApiPut = `/api/EmployeesAPI/PutEmployee/`;
    const magenicAutomationApiDelete = `/api/EmployeesAPI/DeleteEmployee/`;

    let axiosDriver: IAxiosDriver;

    beforeEach(async () => {
        axiosDriver = new AxiosDriver();
        axiosDriver.BaseUrl = magenicAutomationApiBaseUrl;
    });
    
    afterEach(async () => {
    });

    // test for http get request with json response
    it("Get Request - Return 200 Response", async () => {
        // Execute
        let response = await axiosDriver.getWithJsonResponse(magenicAutomationApiGet);
        // Assert
        expect(response.status).toEqual(200);
    });

    // test for http post request with json response and json body
    it("Post Request - Return 201 Response", async () => {
        // Execute
        let response = await axiosDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        // Assert
        expect(response.status).toEqual(201);
        expect(employeeJson.EmpFirstName).toEqual(response.data.EmpFirstName);
        expect(employeeJson.EmpLastName).toEqual(response.data.EmpLastName);
        // Cleanup
        let employee: IEmployee = <IEmployee>response.data;
        await axiosDriver.deleteWithJsonResponse(`${magenicAutomationApiDelete}${employee.EmployeeID.toString()}`);
    });

    // test for http put request with json response and json body
    it("Put Request - Return 204 Response", async () => {
        // Prepare Data
        let postResult = await axiosDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        let employee: IEmployee = <IEmployee>postResult.data;
        employee.EmpFirstName = "Jason Joseph";
        // Execute
        let response = await axiosDriver.putWithJsonResponseAndJsonBody(`${magenicAutomationApiPut}${employee.EmployeeID.toString()}`, JSON.stringify(employee));
        // Assert
        expect(response.status).toEqual(204);        
        // Cleanup
        await axiosDriver.deleteWithJsonResponse(`${magenicAutomationApiDelete}${employee.EmployeeID.toString()}`);
    });

    // method for http delete request with json response
    it("Delete Request - Return 200 Response", async () => {
        // Prepare Data
        let postResult = await axiosDriver.postWithJsonResponseAndJsonBody(magenicAutomationApiPost, JSON.stringify(employeeJson));
        let employee: IEmployee = <IEmployee>postResult.data;
        // Execute
        let response = await axiosDriver.deleteWithJsonResponse(`${magenicAutomationApiDelete}${employee.EmployeeID.toString()}`);
        // Assert
        expect(response.status).toEqual(200);
    });
});