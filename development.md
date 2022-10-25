## helpful vs code extentions 
* pushqrdx.inline-html

## Ideas

* Frontend and Backend completely standalone
* Frontend has basic Components same for every Plattform 
* Ideally Backend tells frontend Page Structure (as HTML)
* Pages are registered from Backend to Frontend and frontend builds Navigation and Pages 
* Basic Structure 
    * depends on registered Pages registered
    * Pages has mostely an Overview and an Detail part
* Events
    * Frontent Structure tells Frontent what events should be triggered
    * Data Events are triggered on Data change (even when the Change comes from Frontend)
    * Data objects can be bound to Datasets and are informed when an change Event arrives for there Data-row
* Backend can consists at example 
    * of an python file for logic and one html structure file