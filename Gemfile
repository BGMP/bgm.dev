# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.2'

gem 'jekyll', '~> 4.0.0'                                          # Jekyll, the static site generator
gem 'jekyll-paginate', '~> 1.1'                                   # Jekyll pagination plugin
gem 'jekyll-sitemap', '~> 1.4'                                    # Jekyll site map plugin
gem 'kramdown-parser-gfm', '~> 1.1'                               # Parser for the GFM dialect of Markdown

gem 'webrick', '~> 1.8'                                         # HTTP server toolkit

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '~> 2.0', '>= 2.0.6'
  gem 'tzinfo-data', '~> 1.2023', '>= 1.2023.3'
  gem 'wdm', '~> 0.1.1'
end
