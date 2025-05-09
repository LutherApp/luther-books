# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @lovkyndig and @lutherans will be requested for
# review when someone opens a pull request.
*       @lovkyndig @lutherans

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @lutherans and not the global
# owner(s) will be requested for a review.
*.js    @lutherans # This is an inline comment.

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go luther.theolog@gmail.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the admin team in the Lutheran-Church organization owns all .txt files.
*.txt @Lutheran-Church/admin

# In this example, @lutherans owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @lutherans

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  luther.theolog@gmail.com

# In this example, @lutherans owns any file in an apps directory
# anywhere in your repository.
apps/ @lutherans

# In this example, @lutherans owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @lutherans

# In this example, any change inside the `/scripts` directory
# will require approval from @lovkyndig or @lutherans.
/scripts/ @lovkyndig @lutherans

# In this example, @lutherans owns any file in a `/logs` directory such as
# `/build/logs`, `/scripts/logs`, and `/deeply/nested/logs`. Any changes
# in a `/logs` directory will require approval from @lovkyndig.
**/logs @lutherans

# In this example, @lutherans owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @lutherans
/apps/github

# In this example, @lutherans owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as this subdirectory has its own owner @lutherans
/apps/ @lutherans
/apps/github @lutherans

# Source: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners