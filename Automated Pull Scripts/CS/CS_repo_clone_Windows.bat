@echo off
REM Cloning the repository with sparse checkout
git clone --filter=blob:none --sparse https://github.com/skills-cogrammar/C10-Lecture-Backpack.git

REM Changing directory to the cloned repository
cd C10-Lecture-Backpack

REM Adding the specific folders to sparse checkout
git sparse-checkout add "Cyber Security (CS)"
git sparse-checkout add "Starter Pack"

@echo on
