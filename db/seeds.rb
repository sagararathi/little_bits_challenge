# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bits = ['bargraph', 'bend-sensor', 'branch', 'bright-led', 'button', 'buzzer', 'coin-battery', 'dc-motor', 'dimmer', 'doubleand', 'doubleor', 'fan', 'forkinverter', 'led', 'light-sensor', 'light-trigger', 'light-wire', 'long-led', 'motion-trigger', 'power', 'pressure-sensor', 'pulse', 'rgb-led', 'roller-switch', 'servo-motor', 'slide-dimmer', 'slide-switch', 'sound-trigger', 'temperature-sensor', 'timeout', 'toggle-switch', 'usb-power', 'uv-led', 'vibration-motor']
puts 'Creating bits'
bits.each do |bit|
  Bit.create(name: bit)
end
user = User.create(username: 'Justin', email: 'justin@gmail.com')
title = 'What is the Bluetooth Low Energy (BLE) Bit?'

invention = Invention.create(title: title, description: Faker::Lorem.paragraph, user: user)

invention.bits << Bit.find(1)
invention.bits << Bit.find(10)
invention.bits << Bit.find(8)

invention.tag_list.add('scissors', 'tape', 'construction paper')
invention.save

user = User.create(username: 'John', email: 'john@gmail.com')
invention = Invention.create(title: 'The Making of Gizmos & Gadgets Kit, 2nd Edition', description: Faker::Lorem.paragraph, user: user)

invention.bits << Bit.find(3)
invention.bits << Bit.find(16)
invention.bits << Bit.find(7)

invention.tag_list.add('scissors', 'tape', 'construction paper')
invention.save
