# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\admin.spec.ts >> Admin User Management >> TC04 - Delete Admin User
- Location: tests\UI\admin.spec.ts:52:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@role=\'table\']').locator('[role=\'row\']').filter({ hasText: 'abdullahJ' }).locator('button').first()

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - generic [ref=f2e113]:
            - heading "Admin" [level=6] [ref=f2e114]
            - heading "/ User Management" [level=6] [ref=f2e115]
        - link [ref=f2e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e118] [cursor=pointer]
        - list [ref=f2e124]:
          - listitem [ref=f2e125]:
            - generic [ref=f2e126] [cursor=pointer]:
              - img "profile picture" [ref=f2e127]
              - paragraph [ref=f2e128]: manda user
              - generic [ref=f2e129]: 
      - navigation "Topbar Menu" [ref=f2e131]:
        - list [ref=f2e132]:
          - listitem [ref=f2e133] [cursor=pointer]:
            - generic [ref=f2e134]:
              - text: User Management
              - generic [ref=f2e135]: 
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Job
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - generic [ref=f2e140]:
              - text: Organization
              - generic [ref=f2e141]: 
          - listitem [ref=f2e142] [cursor=pointer]:
            - generic [ref=f2e143]:
              - text: Qualifications
              - generic [ref=f2e144]: 
          - listitem [ref=f2e145] [cursor=pointer]:
            - link "Nationalities" [ref=f2e146]:
              - /url: "#"
          - listitem [ref=f2e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f2e148]:
              - /url: "#"
          - listitem [ref=f2e149] [cursor=pointer]:
            - generic [ref=f2e150]:
              - text: Configuration
              - generic [ref=f2e151]: 
          - button "" [ref=f2e153] [cursor=pointer]
  - generic [ref=f2e155]:
    - generic [ref=f2e157]:
      - generic [ref=f2e158]:
        - generic [ref=f2e159]:
          - heading "System Users" [level=5] [ref=f2e161]
          - button "" [ref=f2e164] [cursor=pointer]
        - separator [ref=f2e166]
        - generic [ref=f2e168]:
          - generic [ref=f2e170]:
            - generic [ref=f2e172]:
              - generic [ref=f2e173]: Username
              - textbox [ref=f2e176]
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: User Role
              - generic [ref=f2e183] [cursor=pointer]:
                - generic [ref=f2e184]: "-- Select --"
                - generic [ref=f2e185]: 
            - generic [ref=f2e188]:
              - generic [ref=f2e189]: Employee Name
              - textbox "Type for hints..." [ref=f2e194]
            - generic [ref=f2e196]:
              - generic [ref=f2e197]: Status
              - generic [ref=f2e201] [cursor=pointer]:
                - generic [ref=f2e202]: "-- Select --"
                - generic [ref=f2e203]: 
          - separator [ref=f2e205]
          - generic [ref=f2e206]:
            - button "Reset" [ref=f2e207] [cursor=pointer]
            - button "Search" [ref=f2e208] [cursor=pointer]
      - generic [ref=f2e209]:
        - button " Add" [ref=f2e211] [cursor=pointer]:
          - generic [ref=f2e212]: 
          - text: Add
        - generic [ref=f2e213]:
          - separator [ref=f2e214]
          - generic [ref=f2e215]: (16) Records Found
        - table [ref=f2e218]:
          - rowgroup [ref=f2e219]:
            - row [ref=f2e220]:
              - columnheader "" [ref=f2e221]:
                - generic [ref=f2e223] [cursor=pointer]:
                  - checkbox "" [ref=f2e224]
                  - generic [ref=f2e225]: 
              - columnheader "Username " [ref=f2e227]:
                - text: Username
                - generic [ref=f2e228]:
                  - generic [ref=f2e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f2e230]:
                - text: User Role
                - generic [ref=f2e231]:
                  - generic [ref=f2e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f2e233]:
                - text: Employee Name
                - generic [ref=f2e234]:
                  - generic [ref=f2e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e236]:
                - text: Status
                - generic [ref=f2e237]:
                  - generic [ref=f2e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e239]
          - rowgroup [ref=f2e240]:
            - row [ref=f2e242]:
              - cell "" [ref=f2e243]:
                - generic [ref=f2e247]:
                  - checkbox "" [ref=f2e248]
                  - generic [ref=f2e249]: 
              - cell "Admin" [ref=f2e251]
              - cell "Admin" [ref=f2e253]
              - cell "manda user" [ref=f2e255]
              - cell "Enabled" [ref=f2e257]
              - cell [ref=f2e259]:
                - generic [ref=f2e260]:
                  - button "" [ref=f2e261] [cursor=pointer]
                  - button "" [ref=f2e263] [cursor=pointer]
            - row [ref=f2e266]:
              - cell "" [ref=f2e267]:
                - generic [ref=f2e270] [cursor=pointer]:
                  - checkbox "" [ref=f2e271]
                  - generic [ref=f2e272]: 
              - cell "amelia.brown.1790180049072" [ref=f2e274]
              - cell "ESS" [ref=f2e276]
              - cell "A8DCo 010Z" [ref=f2e278]
              - cell "Enabled" [ref=f2e280]
              - cell [ref=f2e282]:
                - generic [ref=f2e283]:
                  - button "" [ref=f2e284] [cursor=pointer]
                  - button "" [ref=f2e286] [cursor=pointer]
            - row [ref=f2e289]:
              - cell "" [ref=f2e290]:
                - generic [ref=f2e293] [cursor=pointer]:
                  - checkbox "" [ref=f2e294]
                  - generic [ref=f2e295]: 
              - cell "AutoUser1790179960255" [ref=f2e297]
              - cell "Admin" [ref=f2e299]
              - cell "manda user" [ref=f2e301]
              - cell "Disabled" [ref=f2e303]
              - cell [ref=f2e305]:
                - generic [ref=f2e306]:
                  - button "" [ref=f2e307] [cursor=pointer]
                  - button "" [ref=f2e309] [cursor=pointer]
            - row [ref=f2e312]:
              - cell "" [ref=f2e313]:
                - generic [ref=f2e316] [cursor=pointer]:
                  - checkbox "" [ref=f2e317]
                  - generic [ref=f2e318]: 
              - cell "AutoUser1790180531937" [ref=f2e320]
              - cell "Admin" [ref=f2e322]
              - cell "manda user" [ref=f2e324]
              - cell "Enabled" [ref=f2e326]
              - cell [ref=f2e328]:
                - generic [ref=f2e329]:
                  - button "" [ref=f2e330] [cursor=pointer]
                  - button "" [ref=f2e332] [cursor=pointer]
            - row [ref=f2e335]:
              - cell "" [ref=f2e336]:
                - generic [ref=f2e339] [cursor=pointer]:
                  - checkbox "" [ref=f2e340]
                  - generic [ref=f2e341]: 
              - cell "dfewcdwd" [ref=f2e343]
              - cell "ESS" [ref=f2e345]
              - cell "manda user" [ref=f2e347]
              - cell "Enabled" [ref=f2e349]
              - cell [ref=f2e351]:
                - generic [ref=f2e352]:
                  - button "" [ref=f2e353] [cursor=pointer]
                  - button "" [ref=f2e355] [cursor=pointer]
            - row [ref=f2e358]:
              - cell "" [ref=f2e359]:
                - generic [ref=f2e362] [cursor=pointer]:
                  - checkbox "" [ref=f2e363]
                  - generic [ref=f2e364]: 
              - cell "disposable.user.1790180078301" [ref=f2e366]
              - cell "Admin" [ref=f2e368]
              - cell "123445 444444" [ref=f2e370]
              - cell "Disabled" [ref=f2e372]
              - cell [ref=f2e374]:
                - generic [ref=f2e375]:
                  - button "" [ref=f2e376] [cursor=pointer]
                  - button "" [ref=f2e378] [cursor=pointer]
            - row [ref=f2e381]:
              - cell "" [ref=f2e382]:
                - generic [ref=f2e385] [cursor=pointer]:
                  - checkbox "" [ref=f2e386]
                  - generic [ref=f2e387]: 
              - cell "e2e_m4b1r_del_1790182028" [ref=f2e389]
              - cell "ESS" [ref=f2e391]
              - cell "manda user" [ref=f2e393]
              - cell "Enabled" [ref=f2e395]
              - cell [ref=f2e397]:
                - generic [ref=f2e398]:
                  - button "" [ref=f2e399] [cursor=pointer]
                  - button "" [ref=f2e401] [cursor=pointer]
            - row [ref=f2e404]:
              - cell "" [ref=f2e405]:
                - generic [ref=f2e408] [cursor=pointer]:
                  - checkbox "" [ref=f2e409]
                  - generic [ref=f2e410]: 
              - cell "e2e_m4b1r_edit_1790182028" [ref=f2e412]
              - cell "Admin" [ref=f2e414]
              - cell "manda user" [ref=f2e416]
              - cell "Enabled" [ref=f2e418]
              - cell [ref=f2e420]:
                - generic [ref=f2e421]:
                  - button "" [ref=f2e422] [cursor=pointer]
                  - button "" [ref=f2e424] [cursor=pointer]
            - row [ref=f2e427]:
              - cell "" [ref=f2e428]:
                - generic [ref=f2e431] [cursor=pointer]:
                  - checkbox "" [ref=f2e432]
                  - generic [ref=f2e433]: 
              - cell "e2e_m4b1r_user_1790182028" [ref=f2e435]
              - cell "ESS" [ref=f2e437]
              - cell "manda user" [ref=f2e439]
              - cell "Enabled" [ref=f2e441]
              - cell [ref=f2e443]:
                - generic [ref=f2e444]:
                  - button "" [ref=f2e445] [cursor=pointer]
                  - button "" [ref=f2e447] [cursor=pointer]
            - row [ref=f2e450]:
              - cell "" [ref=f2e451]:
                - generic [ref=f2e454] [cursor=pointer]:
                  - checkbox "" [ref=f2e455]
                  - generic [ref=f2e456]: 
              - cell "johndoe_emp-0d96" [ref=f2e458]
              - cell "ESS" [ref=f2e460]
              - cell "John_emp-0d96 Doe_emp-0d96" [ref=f2e462]
              - cell "Enabled" [ref=f2e464]
              - cell [ref=f2e466]:
                - generic [ref=f2e467]:
                  - button "" [ref=f2e468] [cursor=pointer]
                  - button "" [ref=f2e470] [cursor=pointer]
            - row [ref=f2e473]:
              - cell "" [ref=f2e474]:
                - generic [ref=f2e477] [cursor=pointer]:
                  - checkbox "" [ref=f2e478]
                  - generic [ref=f2e479]: 
              - cell "johndoe_emp-98bf" [ref=f2e481]
              - cell "ESS" [ref=f2e483]
              - cell "John_emp-98bf Doe_emp-98bf" [ref=f2e485]
              - cell "Enabled" [ref=f2e487]
              - cell [ref=f2e489]:
                - generic [ref=f2e490]:
                  - button "" [ref=f2e491] [cursor=pointer]
                  - button "" [ref=f2e493] [cursor=pointer]
            - row [ref=f2e496]:
              - cell "" [ref=f2e497]:
                - generic [ref=f2e500] [cursor=pointer]:
                  - checkbox "" [ref=f2e501]
                  - generic [ref=f2e502]: 
              - cell "johndoe_emp-ddcd" [ref=f2e504]
              - cell "ESS" [ref=f2e506]
              - cell "John_emp-ddcd Doe_emp-ddcd" [ref=f2e508]
              - cell "Enabled" [ref=f2e510]
              - cell [ref=f2e512]:
                - generic [ref=f2e513]:
                  - button "" [ref=f2e514] [cursor=pointer]
                  - button "" [ref=f2e516] [cursor=pointer]
            - row [ref=f2e519]:
              - cell "" [ref=f2e520]:
                - generic [ref=f2e523] [cursor=pointer]:
                  - checkbox "" [ref=f2e524]
                  - generic [ref=f2e525]: 
              - cell "KalyaniK2" [ref=f2e527]
              - cell "Admin" [ref=f2e529]
              - cell "Ranga Akunuri" [ref=f2e531]
              - cell "Enabled" [ref=f2e533]
              - cell [ref=f2e535]:
                - generic [ref=f2e536]:
                  - button "" [ref=f2e537] [cursor=pointer]
                  - button "" [ref=f2e539] [cursor=pointer]
            - row [ref=f2e542]:
              - cell "" [ref=f2e543]:
                - generic [ref=f2e546] [cursor=pointer]:
                  - checkbox "" [ref=f2e547]
                  - generic [ref=f2e548]: 
              - cell "Rajesh1790180020017" [ref=f2e550]
              - cell "Admin" [ref=f2e552]
              - cell "Ranga Akunuri" [ref=f2e554]
              - cell "Enabled" [ref=f2e556]
              - cell [ref=f2e558]:
                - generic [ref=f2e559]:
                  - button "" [ref=f2e560] [cursor=pointer]
                  - button "" [ref=f2e562] [cursor=pointer]
            - row [ref=f2e565]:
              - cell "" [ref=f2e566]:
                - generic [ref=f2e569] [cursor=pointer]:
                  - checkbox "" [ref=f2e570]
                  - generic [ref=f2e571]: 
              - cell "Rajesh1790180168727" [ref=f2e573]
              - cell "Admin" [ref=f2e575]
              - cell "Ranga Akunuri" [ref=f2e577]
              - cell "Enabled" [ref=f2e579]
              - cell [ref=f2e581]:
                - generic [ref=f2e582]:
                  - button "" [ref=f2e583] [cursor=pointer]
                  - button "" [ref=f2e585] [cursor=pointer]
            - row [ref=f2e588]:
              - cell "" [ref=f2e589]:
                - generic [ref=f2e592] [cursor=pointer]:
                  - checkbox "" [ref=f2e593]
                  - generic [ref=f2e594]: 
              - cell "Tester" [ref=f2e596]
              - cell "ESS" [ref=f2e598]
              - cell "savi g" [ref=f2e600]
              - cell "Enabled" [ref=f2e602]
              - cell [ref=f2e604]:
                - generic [ref=f2e605]:
                  - button "" [ref=f2e606] [cursor=pointer]
                  - button "" [ref=f2e608] [cursor=pointer]
    - generic [ref=f2e611]:
      - paragraph [ref=f2e612]: OrangeHRM OS 5.9
      - paragraph [ref=f2e613]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e614] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  63  |     .locator(".oxd-input-group")
  64  |     .filter({ hasText: /^Confirm Password$/ })
  65  |     .locator("input");
  66  |     this.user_savebtn=page.locator("//button[@type='submit' ]");
  67  | 
  68  |     //search
  69  |     this.serach_userbtn=page.locator("//button[@type='submit' and text()=' Search ' ]")
  70  |     //this.search_user=page.locator("//input[@class='oxd-input oxd-input--focus']");
  71  |     this.userTable=page.locator("//div[@role='table']");
  72  |     this.tableHeaderUsername=page.locator("//div[@role='columnheader' and text()='Username']")
  73  |     this.rowCell=page.locator("//div[@role='cell']");
  74  |    
  75  | 
  76  |   }
  77  |  
  78  |  async navigateToAdmin()
  79  |  {
  80  |   await this.admin.click();
  81  |  }
  82  | 
  83  |   async adduser()
  84  |   {
  85  |    await this.add_user.click();
  86  |   }
  87  | 
  88  |   async useRole(userRole: string) {
  89  |     await this.userRoleDropdown.click();
  90  |     await this.user_role.click();
  91  | }
  92  | 
  93  | 
  94  | async selectStatus(status: string)
  95  | {
  96  |    await this.status_dropdown.click();
  97  |    await this.user_status.click();
  98  | }
  99  | 
  100 |  async enterEmployeeName(name: string) {
  101 | 
  102 |    await this.employee_Name.fill(name);
  103 |  }
  104 | async adminusername(adminUsername:string)
  105 | {
  106 |  await this.admin_username.fill(adminUsername);
  107 | }
  108 | 
  109 | async adminPassword(adminPassword:string)
  110 | {
  111 |    await this.user_password.fill(adminPassword)
  112 | }
  113 | 
  114 | async cnfrmPassword(cnfrmPassword:string)
  115 | {
  116 |    await this.cnfrm_password.fill(cnfrmPassword)
  117 | 
  118 |  }
  119 | 
  120 |  async saveUser() {
  121 | 
  122 |    await this.user_savebtn.click();
  123 |  }
  124 | 
  125 | async serachUser(serachUsername: string)
  126 |  {
  127 |      const userRow = this.userTable
  128 |         .locator("[role='row']")
  129 |         .filter({ hasText: serachUsername });
  130 | 
  131 |     const usernameCell = userRow
  132 |         .locator("[role='cell']")
  133 |         .nth(1);
  134 | 
  135 |       return usernameCell;
  136 |       
  137 |       
  138 |   }
  139 | 
  140 |  async editUser(oldusername: string , newUsername:string) {
  141 |    
  142 |     const userRow = this.userTable
  143 |         .locator("[role='row']")
  144 |         .filter({ hasText: oldusername });
  145 | 
  146 |     await userRow
  147 |         .locator("button")
  148 |         .nth(1)
  149 |         .click();
  150 | 
  151 |      await this.admin_username.fill(newUsername); 
  152 |      await this.user_savebtn.click(); 
  153 | 
  154 | }
  155 | async deleteUser(serachUsername:string) {
  156 |     const userRow = this.userTable
  157 |         .locator("[role='row']")
  158 |         .filter({ hasText: serachUsername });
  159 | 
  160 |     await userRow
  161 |         .locator("button")
  162 |         .nth(0)
> 163 |         .click();
      |          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  164 | 
  165 |         await this.page.getByRole("button" , {name:" Yes, Delete "}).click();
  166 | }
  167 | 
  168 | 
  169 | }
```