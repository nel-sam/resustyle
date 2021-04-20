import React, { useState } from 'react';
import { Panel, DefaultButton, PanelType } from '@fluentui/react';
import { useTranslation } from 'react-i18next';
import Clipboard from 'react-clipboard.js';
import './schema-display.scss';
import { btnStyles } from '../resume-templates/shared/styles';

const resumeSchema = `
{
  "basics": {
    "name": "John Doe",
    "label": "Junior Software QA Tester",
    "picture": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "Tests execution, test analysis and reporting analysis of executed tests and reporting of results , preparing status reports daily, weekly, monthly reports . Involve in Carrying out manual testing, reporting bugs, and analyzed bugs, troubleshooting and responsible to keep track of them.",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "http://twitter.com/john"
    }]
  },
  "work": [{
    "company": "Paylocity",
    "position": "Software Developer",
    "website": "https://www.paylocity.com/",
    "startDate": "2020-02-01",
    "endDate": "2021-03-30",
    "summary": "C#, React, Angular 7 & 8, Ionic (mobile), Elk/Kibana for logging, TeamCity, Octopus for releases, TypeScript/Javascript, SASS/CSS, BitBucket with Git, Visual Studio 2019, VS Code, SQL server, Azure, Amazon Web Services (AWS), and Jira. Developer on the Learning Management System team, where I work on a system that enables people to take search, preview, register for, and take online courses.",
    "highlights": [
      "Implement new work processors for breaking up and running tasks in parallel using RabbitMQ to distribute work",
      "Implemented new components in the Angular+Ionic Mobile app such as a course catalog, search and filtering based on multiple user inputs, and user experience and user interface improvements.",
      "Maintained and created new UI experiences on our React client app (Learning module in the Paylocity suite).",
      "Created documentation that describes the architecture for a new system that uses the entire stack consisting of React for the web client, Angular Ionic for the Mobile client, a C#/.Net API, SQL Server, RabbitMQ, and AWS storage."
    ]
  },
  {
      "company": "DriveTime",
      "position": "Software Developer",
      "website": "https://www.drivetime.com/",
      "startDate": "2018-05-01",
      "endDate": "2020-02-28",
      "summary": "C#, Angular 7 & 8, Ionic (mobile), REST API, WCF, GraphQL API development, Optimizely (experimentation), Azure Devops (VSTS), Azure Functions, and Message queues & Topics. Splunk & AppInsights for logging & analytics, Feature Flags, TypeScript/Javascript, GitHub/Git, Visual Studio, VS Code, SQL server, and Target Process for Scrum management. Debugging tools such as Fiddler, & Postman. I worked mainly on Microservice APIs and Angular web apps as a Full Stack dev for the various teams.",
      "highlights": [
        "Full-stack development on DriveTime.com , a nation-wide auto dealer and Bridgecrest.com",
        "Introduced Angular Material components into an existing Angular project and set UI/UX, performance, and coding standards and practices.",
        "Part of the dev team that created a public-facing GraphQL API (C#/.Net) for external consumption",
        "Participated in architecture discussions and proposed, created a POC, and implemented the authentication model on our public API.",
        "Migrated legacy product to use Azure Active Directory auth (OpenID Connect).",
        "Architected and implemented Subscriber model solution for processing vehicle inventorying photos using Azure services such as server-less functions, service bus, queues, blob storage, and Azure AD.",
        "Recreated a legacy app in Angular 8 as a side project (not on work time)",
        "Architected and implemented system for vehicle value analysis using Azure.",
        "Work on legacy jQuery and KnockoutJS apps when needed."
      ]
    },
    {
      "company": "iPro Tech",
      "position": "Software Developer",
      "website": "https://iprotech.com/",
      "startDate": "2017-01-01",
      "endDate": "2018-03-28",
      "summary": "C#, Selenium, PowerShell, Azure Devops (VSTS), JavaScript. I lead the automated testing effort and developed in-house testing framework (C#) on top of Selenium and CodedUI.",
      "highlights": [
        "Awarded three times for work-ethic, and received two product certifications within first two months.",
        "Created a Google Charting API Dashboard (JavaScript library) for dev teams to view test results related to their products. This page retrieved TFS data using the Team Services REST API.",
        "Developed framework features such as in-house database logging (C# with Entity Framework), test result reporting, async multi-browser testing, and async test execution across multiple test agents.",
        "Created multi-threaded WinForms utility (C#) to help the Support Team debug issues on customer environments.",
        "Lead conversion of tests into SpecFlow BDD framework (Cucumber for .Net using MSTest) and White (free alternative to CodedUI), which made Automation efforts much cheaper for the company.",
        "Created and managed my team’s Sprints (Agile/Scrum) using TFS and later Jira.",
        "Handled DevOps functions with on-prem Microsoft Team Foundation Server (TFS & PowerShell scripting)."
      ]
    },
  {
      "company": "Dell",
      "position": "Software Developer",
      "website": "https://www.dell.com/",
      "startDate": "2012-07-01",
      "endDate": "2017-01-30",
      "summary": "C#, Rest API, WCF, MVC with Razor, WinForms, MSSQL, ASP.Net, MVC, Entity framework, Rest API’s, Unity for Dependency Injection, WinForms, and integration with Active Directory & LDAP. Won the Dell Champion Award in 2015, which is given to valuable employees.",
      "highlights": [
        "Create a C# CLI utility used by support for capturing data from Windows, SQL, and Active Directory which was required when investigating customer issues. Created a WinForms reporting client used for viewing historic snapshot data of security policies using data from our RESTful API (hosted on IIS).",
        "Took ownership of the Windows Service project (C#) that created security policy snapshots. I worked on fixing bugs and eventually trained customers on its codebase during the sunsetting phase.",
        "Worked on various WinForms, Windows Services, ASP.NET Web Services, and Web App projects.",
        "Lead the Automated test development team which included myself and 4 other developers using Azure and VSTS, which we used for Sprint (Agile/Scrum) planning and reporting team progress to managers.",
        "Trained developers on developing with MS CodedUI, Selenium, API-based testing, load testing, load testing, and Security & Penetration testing.",
        "Responsible for DevOps functions such as creation and maintenance of MSBuild servers, build/release definitions, and automated test environments for all Phoenix product teams. This includes on-prem TFS, Visual Studio Online (VSTS), PowerShell scripts, and integration with Azure Virtual Machines for automated testing."
      ]
    },
  {
      "company": "Intel",
      "position": "Software Developer",
      "website": "https://www.intel.com/",
      "startDate": "2010-09-01",
      "endDate": "2012-07-30",
      "summary": "Developed new features, maintained existing C# and MVC (Razor) code, and repaired defects in the internal testing Framework/IDE developed by my team. Trained our customers on the use of our toolset and framework. Aided other Engineers by troubleshooting and correcting their VBScript and JavaScript. Performed tests and pre-release checks. Diagnosed issues and implemented fixes in our internal customers’ test scripts.",
      "highlights": [
        "Implemented feature to load XML files larger than the available RAM.",
        "Implemented feature to save breakpoints in the code editor.",
        "Implemented JavaScript support including autocomplete and syntax highlighting using Gold Parser.",
        "Worked on a Web front-end (ASP.net with Razor) for controlling the automation framework remotely.",
        "Abstraction layer for Cisco access point automated testing via SSH.",
        "Linux SSH plugin for remotely sending commands and receiving shell output.",
        "Plugin for using WoL (wake on lan) in tests.",
        "Plugin for retrieving battery info from laptops using the Win32_Battery WMI API."
      ]
    }],
  "volunteer": [{
    "organization": "Meals on Wheels",
    "position": "QA tester",
    "website": "http://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "As part of a hackaton, I tested the program that my team made for Meals on Wheels.",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  },{
    "organization": "Organization",
    "position": "Volunteer",
    "website": "http://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description...",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [{
    "institution": "University of Alaskifornia",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "website": "http://publication.com",
    "summary": "Description..."
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "Javascript"
    ]
  },{
    "name": "Back-end Development",
    "level": "Master",
    "keywords": [
      "C#",
      "REST API",
      "GraphQL API",
      "SQL Server",
      "Java",
      "RabbitMQ",
      "AWS"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference..."
  }]
}`;

const SchemaDisplay: React.FC = () => {
  const [isSchemaVisible, setIsSchemaVisible] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <div>
      <DefaultButton
        styles={btnStyles}
        onClick={() => setIsSchemaVisible(!isSchemaVisible)}
        text={isSchemaVisible ? t('hide-schema-button') : t('view-schema-button')} />
      {isSchemaVisible &&
        <Panel
          isLightDismiss
          type={PanelType.medium}
          headerText={t('json-schema')}
          className="schema-panel"
          isOpen={isSchemaVisible}
          closeButtonAriaLabel={isSchemaVisible ? t('hide-schema-button') : t('view-schema-button')}
          onDismiss={() => setIsSchemaVisible(!isSchemaVisible)}
          onOuterClick={() => setIsSchemaVisible(!isSchemaVisible)}
        >
          <DefaultButton styles={btnStyles}>
            <Clipboard aria-label="Copy" title="Copy" className="clipboard" data-clipboard-text={resumeSchema}></Clipboard>
          </DefaultButton>
          <pre>{resumeSchema}</pre>
        </Panel>
      }
    </div>
  );
};

export default SchemaDisplay;