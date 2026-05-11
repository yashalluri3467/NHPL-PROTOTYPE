# Script to fix the large file issue by removing node_modules from git index
Write-Host "Removing node_modules from Git index..."
git rm -r --cached **/node_modules

Write-Host "Committing the removal..."
git commit -m "Remove node_modules from tracking"

Write-Host "Done. You can now try to push."
