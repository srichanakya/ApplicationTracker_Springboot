package app.netlify.srichanakyayennana.applicationtracker;

import app.netlify.srichanakyayennana.applicationtracker.Model.Application;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import jakarta.annotation.Priority;
import net.minidev.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.testng.Assert;

import java.util.List;

import static io.restassured.RestAssured.given;

@SpringBootTest
class ApplicationTrackerApplicationTests {

    @Test
    void contextLoads() {
        // Set the base URI
        RestAssured.baseURI = "http://localhost:8080";

        // Create the request specification
        RequestSpecification httpRequest = RestAssured.given();

        // Send the request and get the response
        Response response = httpRequest.request(Method.GET, "/applications/allapplications");

        // Extract and print the status code
        int statusCode = response.getStatusCode();
        System.out.println("Response Status Code: " + statusCode);

        // Extract the list of applications
        List<Application> applications = response.jsonPath().getList(".", Application.class);


        System.out.println("First Test case");
        // Print the applications
        System.out.println(applications);
    }



//    {
//        "id": 9,
//            "jobtitle": "Software Engineer",
//            "role": "FULLTIME",
//            "company": "Apple Company",
//            "appliedon": "2024-06-23T09:38:00",
//            "referral": "Employee Referral",
//            "referralperson": "Sai",
//            "status": "APPLIED"
//    }
//

    @Priority(-1)
    @Test
    void checkPostMethod(){
        RestAssured.baseURI = "http://localhost:8080/applications";
        RequestSpecification httpRquest = RestAssured.given();
        httpRquest.header("Content-Type", "application/json");
        JSONObject js = new JSONObject();
        js.put("jobtitle","SDET");
        js.put("role","FULLTIME");
        js.put("company","copart");
        js.put("appliedon","2024-06-23T09:38:00");
        js.put("referral","No");
        js.put("referralperson","YES");
        js.put("status","APPLIED");

        httpRquest.body(js.toJSONString());
        Response response = httpRquest.request(Method.POST,"/addapplications");
        System.out.println("Second test case");
        System.out.println(response.statusLine());
        Assert.assertEquals(200,response.getStatusCode());
        Assert.assertEquals("HTTP/1.1 200 ",response.statusLine());
        String code = response.jsonPath().get("SuccessCode");
        System.out.println(code);
    }
}
