Chemical Inventory CRUD Application

1. Overview
   This project is a CRUD-based application designed for managing chemical supplies. It allows users to perform various operations such as adding, editing, deleting, moving, and saving entries. The application has been implemented using pure JavaScript, CSS, and HTML, adhering to project requirements without relying on any frameworks or libraries.

2. Features
   Add Row: Users can easily add new entries (chemicals) to the table through a user-friendly modal form.

Edit Row: Each entry includes an edit option that allows users to update the chemical information as needed.

Delete Each Row: Users have the ability to delete individual rows from the table, confirming their action for added security.

Delete All Rows: A feature exists to delete all entries simultaneously, with a confirmation prompt to prevent accidental deletions.

Save Functionality: Newly created or modified rows can be saved, with the data persisting even after a page reload.

Move Row Up/Down: Users can select and move rows up or down within the table, enhancing the organization of entries. The first row requires selection for movement.

Reload Functionality: Reloading the page restores the default 15 entries unless custom rows have been added, ensuring the initial data set is always available.

The table is designed to be mostly responsive, with attention given to usability on smaller screens despite the number of columns.

3. Design Approach
   Initial Plan: The project commenced with an analysis of the problem statement and a plan for the table’s structure and layout, which was sketched on paper. Following this, a static UI was created, focusing on the organization of divs and HTML tags.

Icons: Initially, the use of a CDN for icons was considered. However, due to project constraints, icons were manually downloaded and organized in a separate folder.

Dynamic Rows: The table was made dynamic through the use of template literals in JavaScript. Rows are added via a form submission event listener and dynamically inserted into the DOM.

4. Challenges and Solutions
   Default 15 Rows: The requirement to display 15 default entries alongside user-added entries posed challenges in maintaining functionality. This was addressed through multiple revisions of the code logic and implementing pseudocode dry runs for movement and reloading.

Row Gaps and Movement: Initial issues arose due to additional invisible rows for spacing interfering with the row movement functionality. This was rectified by revisiting the row-moving logic to ensure proper handling of row spaces.

Animations: Minimal animations were implemented to prioritize core functionality, though potential enhancements for user engagement have been identified for future consideration.

5. Future Enhancements
   Single Button for Row Deletion: A future feature is planned to allow users to delete any row by entering its serial number into an input field and clicking a single button, simplifying the deletion process. This feature faced logic difficulties but can be revisited.

Magnifying Glass Hover Effect: A hover effect is envisioned that zooms in on the hovered section and its surroundings, utilizing a custom cursor resembling a magnifying glass. Although this could be implemented using GSAP, it was postponed due to library restrictions.

These ideas are kept in mind for future iterations, with plans to refine the logic and UI components when time allows.

6. Testing and User Experience
   Upon first opening the application, users will see 15 default rows, providing a clear overview of functionalities:

Adding, deleting, and editing rows.
Moving rows up and down.
Reloading the page to verify if the default data returns or if saved custom data persists.
The application adjusts to smaller screens, although the number of columns may challenge usability on very small devices. Overall, the design remains mostly responsive, aiming for a positive user experience.

7. Tools and Resources
   Development Environment: The project was developed using VSCode as the primary code editor.

Documentation: MDN (Mozilla Developer Network) provided valuable resources and documentation during the development process.

Extensions: Various VSCode extensions were utilized to enhance coding speed and assist with debugging, making the development process more efficient.
