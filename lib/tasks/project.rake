# encoding: utf-8
require 'active_record'

namespace :project do
  desc 'setup project database'
  task :setup => :environment do
    commands = [
      'rake db:drop',
      'rake db:create',
      'rake db:migrate',
      'rake db:seed',
      'bin/rails s'
    ]
    system(commands.join('&&'))
  end
end
