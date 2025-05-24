
My Feature Branch Name:  feature/angularFrontend

All Command For Git
====================

To disable or remove the URL https://kamallochanpradhan.github.io/deployMyAngularFrontend/KamalAngular/dashboard, which is served via GitHub Pages, you have a few options depending on what you want:

Disable GitHub Pages completely
This will stop serving the site entirely.

Steps:

Go to your repository: kamallochanpradhan/deployMyAngularFrontend

Click on Settings (top right).

In the left sidebar, find and click Pages.

Under the GitHub Pages section:

Change the Source dropdown to None.

Click Save.

🔒 This immediately disables the published site. The URL will return a 404 after a few minutes.

🔁 Option 2: Keep Pages enabled but remove the app
If you want to keep GitHub Pages running but remove the Angular app or certain paths:

Delete or stop building the Angular output folder (dist/, build/, etc.).

Or modify the deployment workflow so it no longer includes the KamalAngular/dashboard part.

Push the change — this will update or remove the page contents.
