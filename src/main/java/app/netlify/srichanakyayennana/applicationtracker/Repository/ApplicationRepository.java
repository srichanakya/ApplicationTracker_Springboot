package app.netlify.srichanakyayennana.applicationtracker.Repository;

import app.netlify.srichanakyayennana.applicationtracker.Model.Application;
import app.netlify.srichanakyayennana.applicationtracker.Model.Role;
import app.netlify.srichanakyayennana.applicationtracker.Model.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface ApplicationRepository extends JpaRepository<Application, Long> {






List<Application> findByStatus(@Param("status") Status status);


    @Query("SELECT a FROM Application a WHERE " +
            "(:jobtitle IS NULL OR a.jobtitle = :jobtitle) AND " +
            "(:role IS NULL OR a.role = :role) AND " +
            "(:company IS NULL OR a.company = :company)")
    List<Application> findByTitleRoleCompany(
            @Param("jobtitle") String jobtitle,
            @Param("role") Role role,
            @Param("company") String company
    );



    @Query("SELECT a.status as status, count(a) as count FROM Application a GROUP BY a.status")
    List<Map<String, Long>> countByStatus();



    @Query("SELECT DATE(a.appliedon) AS appliedDate, COUNT(a.jobtitle) AS jobCount " +
            "FROM Application a " +
            "GROUP BY DATE(a.appliedon)")
    List<Object[]> countJobsByAppliedDate();



}
