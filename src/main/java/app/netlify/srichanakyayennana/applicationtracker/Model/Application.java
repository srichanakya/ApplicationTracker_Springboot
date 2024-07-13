package app.netlify.srichanakyayennana.applicationtracker.Model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String jobtitle;

    @Enumerated(EnumType.STRING)
    private Role role;
    private String company;
    private String description;

    @Enumerated(EnumType.STRING)
    private Wheredidyoufind wheredidyoufind;
    private String username;
    private String password;
    private LocalDateTime appliedon;
    private String referral;
    private String referralperson;


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Wheredidyoufind getWheredidyoufind() {
        return wheredidyoufind;
    }

    public void setWheredidyoufind(Wheredidyoufind wheredidyoufind) {
        this.wheredidyoufind = wheredidyoufind;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Enumerated(EnumType.STRING)
    private Status status;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public LocalDateTime getAppliedon() {
        return appliedon;
    }

    public void setAppliedon(LocalDateTime appliedon) {
        this.appliedon = appliedon;
    }

    public String getReferral() {
        return referral;
    }

    public void setReferral(String referral) {
        this.referral = referral;
    }

    public String getReferralperson() {
        return referralperson;
    }

    public void setReferralperson(String referralperson) {
        this.referralperson = referralperson;
    }
}

