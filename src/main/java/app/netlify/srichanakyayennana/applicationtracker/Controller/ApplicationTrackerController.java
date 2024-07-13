package app.netlify.srichanakyayennana.applicationtracker.Controller;


import app.netlify.srichanakyayennana.applicationtracker.Exception.DataNotFoundException;
import app.netlify.srichanakyayennana.applicationtracker.Model.Application;
import app.netlify.srichanakyayennana.applicationtracker.Model.Role;
import app.netlify.srichanakyayennana.applicationtracker.Model.Status;
import app.netlify.srichanakyayennana.applicationtracker.Repository.ApplicationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/applications")
@CrossOrigin("http://localhost:3000/")
public class ApplicationTrackerController {


    private final ApplicationRepository applicationRepository;

    public ApplicationTrackerController(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @GetMapping("/allapplications")
    List<Application> findAll(){
        return applicationRepository.findAll();
    }

    @GetMapping("/viewapplication/{id}")
    Application viewapplication(@PathVariable Long id){
//        System.out.println(applicationRepository.findById(id).get());
        return applicationRepository.findById(id).get();
    }

    @PostMapping("/addapplications")
    Application newApplications(@RequestBody Application application){

        System.out.println(application.getWheredidyoufind());
        return applicationRepository.save(application);
    }

    @PutMapping("/updateapplication/{id}")
    Application updateApplication(@RequestBody Application application, @PathVariable Long id) throws DataNotFoundException {

        return applicationRepository.findById(id).map((app) ->{
            app.setJobtitle(application.getJobtitle());
            app.setCompany(application.getCompany());
            app.setAppliedon(application.getAppliedon());
            app.setReferral(application.getReferral());
            app.setStatus(application.getStatus());
            app.setRole(application.getRole());
            app.setDescription(application.getDescription());
            app.setUsername(application.getUsername());
            app.setPassword(application.getPassword());
            app.setWheredidyoufind(application.getWheredidyoufind());
            app.setReferralperson(application.getReferralperson());
            return applicationRepository.save(app);
        }).orElseThrow(()-> new DataNotFoundException("Application not found"));

    }


    @DeleteMapping("/deleteapplication/{id}")
void deleteApplication(@PathVariable Long id){
        applicationRepository.deleteById(id);

}



    //    to get total applications
@GetMapping("/count")
int getcount(){
        List<Application> lis = applicationRepository.findAll();
        return lis.size();
}

@GetMapping("/{status}")
List<Application> findByStatus(@PathVariable Status status){

        List<Application> lis = applicationRepository.findByStatus(status);
    System.out.println(lis);
        return lis;
}


@GetMapping("/find")
List<Application> findByTitleRoleCompany(@RequestParam(required = false) String jobtitle, @RequestParam(required = false) Role role, @RequestParam(required = false) String company){

    if (jobtitle == null || jobtitle.isEmpty()) {
        jobtitle = null;
    }
    // Assuming Role enum has a default value
    if (role == null) {
        role = null; // Replace with your default role
    }
    if (company == null || company.isEmpty()) {
        company = null;
    }

    return applicationRepository.findByTitleRoleCompany(jobtitle,role,company);

}




    @GetMapping("/countByStatus")
    public List<Map<String, Long>> countApplicationsByStatus() {
        return applicationRepository.countByStatus();
    }


    @GetMapping("/filterbydate")
    public List<Object[]> countJobsByAppliedDate() {
        return applicationRepository.countJobsByAppliedDate();
    }

}
