@echo off
set targetName=%~NX1
set replacementFile=%~F2
call :processFolder
goto :EOF

:processFolder
rem For each folder in this level
for /D %%a in (*) do (
   rem Enter into it, process it and go back to original
   cd %%a
   if exist "%targetName%" (
      copy "%replacementFile%" "%targetName%" /Y
   )
   call :processFolder
   cd ..
)
exit /B