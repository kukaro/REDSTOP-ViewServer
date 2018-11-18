git add .
if "%1" == "" (
    git commit -m "compact"
) else (
    git commit -m "%1"
)
git push

