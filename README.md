# Django + React Integration

Basic Stuff to Work:
 https://github.com/ilearn-utube/django-react_todo
--
1.  django-admin startproject todo

2.  Install NodeJS and check the version of (npm/npx)
    > npx --version
        (or)                                                           
     npm --version

3.  > npx install -g create-react-app
4.  > npx create-react-app reactapp
5.  > cd reactapp
6.  > npm run build
7.  > Alter a Code into `todo/todo/settings.py` file
        
        TEMPLATES = [
            {
                'DIRS': [
                    os.path.join(BASE_DIR, "reactapp/build"),
                ],
            }
        ]

8.  > In `todo/todo/urls.py` file
        
        from django.views.generic import TemplateView
        
        urlpatterns = [
            path("", TemplateView.as_view(template_name="index.html"))
        ]

9.  > In `todo/todo/settings.py` file
        Atlast line add below content
        
        STATICFILES_DIRS = [
           os.path.join(BASE_DIR, "reactapp/build/static")
        ]    
 10. > come to root directory and run below cmd:
        python manage.py runserver      
 11. > Note: Whenever modified code in `reactapp/*files`
       for updating to web browser we need to run cmd
        `npm run build`  
 
 12. Basic Git Commands:
        <pre>
        …or create a new repository on the command line
        echo "# git-cmds" >> README.md
        git init
        git add README.md
        git commit -m "first commit"
        git branch -M master
        git remote add origin https://github.com/ilearn-utube/git-cmds.git
        git push -u origin master
                        
        …or push an existing repository from the command line
        git remote add origin https://github.com/ilearn-utube/git-cmds.git
        git branch -M master
        git push -u origin master 
       </pre>
 

#### Note: 
After downloading the code from this repository, 
goto directory: `todo/reactapp` run below cmd

`npm i node-modules`





