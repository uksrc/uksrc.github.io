# Sets page.last_modified_at to the date of the last git commit that touched
# the page's source file, for pages that opt in with `git_last_modified: true`.
# An explicit last_modified_at in front matter is left alone.
require "open3"
require "time"

Jekyll::Hooks.register :pages, :pre_render do |page|
  next unless page.data["git_last_modified"]
  next if page.data["last_modified_at"]

  path = File.join(page.site.source, page.relative_path)
  out, status = Open3.capture2("git", "log", "-1", "--format=%cI", "--", path,
                               chdir: page.site.source)
  page.data["last_modified_at"] = Time.parse(out.strip) if status.success? && !out.strip.empty?
end
