'use strict';

// Questions are based on the uploaded 2026 New Jersey Driver Manual.
// The page number in each explanation refers to the printed page number in the manual.

const QUESTION_BANK = [
  // Licensing and GDL (Chapter 1)
  { id:'gdl01', topic:'Licensing & GDL', page:19, q:'What is the minimum age to obtain a New Jersey Special Learner Permit?', a:['15 years old','16 years old','17 years old','18 years old'], c:1, why:'The Special Learner Permit is available beginning at age 16, with parent or guardian consent and enrollment in an approved behind-the-wheel course.' },
  { id:'gdl02', topic:'Licensing & GDL', page:19, q:'How many hours of behind-the-wheel instruction are required for the approved course for a Special Learner Permit?', a:['Three hours','Four hours','Six hours','Ten hours'], c:2, why:'The approved course consists of six full hours of behind-the-wheel instruction in a dual-controlled vehicle.' },
  { id:'gdl03', topic:'Licensing & GDL', page:15, q:'Under the standard under-21 GDL learner path, how much supervised practice is required before applying for a probationary license?', a:['At least 3 months and 25 hours','At least 6 months and 50 hours, including 10 hours in darkness','At least 9 months and 60 hours','At least 12 months and 100 hours'], c:1, why:'The learner must practice for at least six months and complete at least 50 hours, including 10 hours during darkness.' },
  { id:'gdl04', topic:'Licensing & GDL', page:18, q:'A permit holder under 21 is generally prohibited from driving during which hours?', a:['10:00 p.m. to 4:00 a.m.','10:30 p.m. to 5:30 a.m.','11:01 p.m. to 5:00 a.m.','Midnight to 6:00 a.m.'], c:2, why:'The manual lists 11:01 p.m. to 5:00 a.m. as the restricted period for Special Learner and Examination Permit holders.' },
  { id:'gdl05', topic:'Licensing & GDL', page:18, q:'Which statement about electronic devices is correct for a New Jersey GDL permit or probationary driver?', a:['Hands-free calls are allowed while moving','Only texting is prohibited','Hand-held and hands-free electronic-device use is prohibited','A phone may be used when traffic is stopped'], c:2, why:'The GDL restrictions prohibit both hand-held and hands-free cell phones and other electronic devices.' },
  { id:'gdl06', topic:'Licensing & GDL', page:18, q:'A supervising driver accompanying a permit holder must be at least 21 and have what driving experience?', a:['One year','Two years','Three years','Five years'], c:2, why:'The supervising adult must be at least 21, hold a valid New Jersey driver license, and have at least three years of driving experience.' },
  { id:'gdl07', topic:'Licensing & GDL', page:19, q:'Where must the two red reflective GDL decals be displayed?', a:['On the front and rear windshields','On the top left corner of the front and rear license plates','On the rear bumper only','On both side mirrors'], c:1, why:'The two removable red reflective decals go on the top-left corner of the front and rear license plates.' },
  { id:'gdl08', topic:'Licensing & GDL', page:18, q:'For a Special Learner Permit holder, which passenger arrangement is allowed?', a:['Any two passengers','Only one passenger, regardless of relationship','Parents, guardians, or dependents, plus one additional passenger','Any number of passengers if everyone wears a seat belt'], c:2, why:'Special Learner Permit passengers are limited to the holder’s parent, guardian, or dependents, plus one additional passenger.' },
  { id:'gdl09', topic:'Licensing & GDL', page:18, q:'For an Examination Permit holder under 21, what is the general passenger restriction unless accompanied by a parent or guardian?', a:['Dependents and one additional passenger','Two unrelated passengers','No passengers at all','Any passengers who are at least 18'], c:0, why:'The general restriction is dependents of the permit holder and one additional passenger, unless a parent or guardian is accompanying the driver.' },
  { id:'gdl10', topic:'Licensing & GDL', page:4, q:'A New Jersey motorist who changes address must notify the MVC within:', a:['48 hours','One week','Two weeks','60 days'], c:1, why:'The manual says an address change must be reported to the MVC within one week after moving.' },
  { id:'gdl11', topic:'Licensing & GDL', page:4, q:'A motorist who legally changes their name must report the change to the MVC within:', a:['One week','Two weeks','30 days','60 days'], c:1, why:'A legal name change must be reported within two weeks.' },
  { id:'gdl12', topic:'Licensing & GDL', page:4, q:'A motorist with a valid out-of-state license who becomes a New Jersey resident generally must apply for a New Jersey license within:', a:['30 days','45 days','60 days','One year'], c:2, why:'The manual gives 60 days, or before the current license expires, whichever is sooner. Commercial drivers have a shorter 30-day period.' },
  { id:'gdl13', topic:'Licensing & GDL', page:21, q:'How long may a motorist with a valid license from another country drive in New Jersey with that license?', a:['30 days','60 days','Six months','Up to one year'], c:3, why:'The manual states that a motorist with a valid foreign license may drive with it for up to one year.' },
  { id:'gdl14', topic:'Licensing & GDL', page:22, q:'What is the role of an International Driving Permit (IDP)?', a:['It replaces a driver license in the United States','It is used instead of vehicle registration','It provides a translation and is used with a valid driver license','It allows a person to drive without insurance'], c:2, why:'An IDP helps overcome language barriers and provides an additional source of identification, but it cannot replace a valid driver license.' },
  { id:'gdl15', topic:'Licensing & GDL', page:16, q:'Under the Young Adult GDL path, what is the minimum age to obtain an Examination Permit?', a:['16','17','18','21'], c:1, why:'The Young Adult Road path begins at age 17. The permit applicant must pass the knowledge and vision tests.' },
  { id:'gdl16', topic:'Licensing & GDL', page:17, q:'Under the Adult Road GDL path, how long must a driver age 21 or older practice supervised driving before the road test?', a:['One month','Three months','Six months','One year'], c:1, why:'The Adult Road path requires at least three months of supervised driving before the road test.' },
  { id:'gdl17', topic:'Licensing & GDL', page:15, q:'What is the minimum age for a New Jersey basic driver license?', a:['16','17','18','21'], c:2, why:'The manual states that the basic driver license requires a minimum age of 18.' },

  // Driver responsibility and vehicle operation (Chapter 3)
  { id:'safe01', topic:'Vehicle Safety', page:40, q:'Who is responsible for making sure passengers under 18 wear seat belts?', a:['Each passenger individually','The driver','The vehicle owner, even if not present','The front-seat passenger'], c:1, why:'The driver is responsible for passengers under age 18. Adult front-seat passengers are responsible for themselves.' },
  { id:'safe02', topic:'Vehicle Safety', page:40, q:'In New Jersey, failure of a driver, front-seat passenger, or child under 18 to wear a seat belt is generally:', a:['A primary offense','A warning-only offense','A secondary offense only','Not a violation if the trip is short'], c:0, why:'The manual identifies these seat-belt violations as primary offenses, meaning an officer may stop a vehicle for the violation.' },
  { id:'safe03', topic:'Vehicle Safety', page:41, q:'What is the purpose of an air bag?', a:['To replace the seat belt in a frontal crash','To supplement seat belts in a crash','To prevent every type of crash','To keep passengers from moving during normal driving'], c:1, why:'Air bags are supplemental protection. The manual emphasizes using lap and shoulder seat belts on every trip.' },
  { id:'safe04', topic:'Vehicle Safety', page:44, q:'According to the manual, where are children 12 years old and younger safest?', a:['In the front seat with the seat moved back','In the back seat, properly restrained','In any seat if an air bag is present','In the front seat if the trip is under five miles'], c:1, why:'The manual says children 12 and younger should ride in the back seat and be properly buckled or restrained.' },
  { id:'safe05', topic:'Vehicle Safety', page:42, q:'Under New Jersey’s child passenger safety law, a child under age 8 who is less than 57 inches tall must generally ride:', a:['In the front seat using only a lap belt','In a federally approved child restraint or booster in a rear seat','In any seat without a restraint if an adult is present','In the back seat using an adult seat belt only'], c:1, why:'A child under eight and shorter than 57 inches must use the specified federally approved restraint or booster in a rear seat, subject to the manual’s stated exceptions.' },
  { id:'safe06', topic:'Vehicle Safety', page:44, q:'Why should a rear-facing infant seat not be placed in front of an active passenger air bag?', a:['The infant seat blocks the driver’s view','The air bag could seriously injure or kill the child','The seat belt will not lock','The air bag prevents the seat from being secured'], c:1, why:'The manual warns that an active passenger-side air bag can seriously injure or kill a child in a rear-facing restraint.' },
  { id:'safe07', topic:'Vehicle Safety', page:51, q:'What hand position does the manual recommend for normal steering?', a:['10 and 2 o’clock','9 and 3 o’clock','8 and 4 o’clock','One hand at 12 o’clock'], c:1, why:'The manual recommends gripping the outside rim at the 9 and 3 o’clock positions.' },
  { id:'safe08', topic:'Vehicle Safety', page:54, q:'At least how far before turning should a motorist signal?', a:['25 feet','50 feet','100 feet','200 feet'], c:2, why:'New Jersey’s manual says to signal at least 100 feet before turning and cancel the signal after the turn.' },
  { id:'safe09', topic:'Vehicle Safety', page:54, q:'Which hand signal indicates a right turn?', a:['Arm straight out','Arm downward, palm facing rear','Arm upward','Arm moving in a circle'], c:2, why:'The right-turn hand signal is the arm and hand pointed upward.' },
  { id:'safe10', topic:'Vehicle Safety', page:54, q:'Which hand signal indicates slowing down or stopping?', a:['Arm upward','Arm straight out','Arm downward, palm facing the rear','Both arms raised'], c:2, why:'The stopping/slowing hand signal is the arm downward with the palm facing the rear.' },
  { id:'safe11', topic:'Vehicle Safety', page:55, q:'When reversing, the manual recommends looking:', a:['Only at the backup camera','Only in the rearview mirror','Through the rear window by turning the head and body','Only in the side mirrors'], c:2, why:'The manual says to turn the head and body to the right and look clearly through the rear window rather than relying on mirrors.' },
  { id:'safe12', topic:'Vehicle Safety', page:55, q:'At approximately what speed should a vehicle normally be driven while backing up?', a:['Walking speed, about 2–4 mph','10–15 mph','20 mph','The posted speed limit'], c:0, why:'The manual recommends backing up slowly, typically at walking speed (2 to 4 mph).' },
  { id:'safe13', topic:'Vehicle Safety', page:52, q:'Which factor affects a vehicle’s stopping distance?', a:['The color of the vehicle','The driver’s reaction time','The radio volume only','The number of doors'], c:1, why:'Stopping distance is affected by reaction time, weather and visibility, vehicle weight, brakes, tires, roadway conditions, and speed.' },
  { id:'safe14', topic:'Vehicle Safety', page:45, q:'When braking with an anti-lock braking system (ABS), what should the driver do?', a:['Pump the brake pedal rapidly','Apply steady pressure to the brake pedal','Turn the steering wheel sharply','Shift into neutral immediately'], c:1, why:'The manual says to apply steady pressure with ABS and never pump the brake pedal.' },
  { id:'safe15', topic:'Vehicle Safety', page:47, q:'What must a motorist do before driving a vehicle covered with snow or ice?', a:['Clear only the windshield','Remove accumulated snow and ice from exposed surfaces','Drive slowly until it blows off','Clear only the driver-side window'], c:1, why:'New Jersey law requires reasonable efforts to remove snow and ice from exposed surfaces, including the hood, trunk, roof, and windshield.' },
  { id:'safe16', topic:'Vehicle Safety', page:47, q:'Carbon monoxide from vehicle exhaust is:', a:['Colorless and odorless','Blue and strongly scented','Visible only at night','Harmless in a closed garage'], c:0, why:'Carbon monoxide is an odorless, colorless gas found in vehicle exhaust.' },
  { id:'safe17', topic:'Vehicle Safety', page:47, q:'Which situation can cause dangerous carbon monoxide buildup?', a:['Driving with the windows closed on a highway','Idling a vehicle in a garage, even with the outside door open','Using windshield wipers in rain','Driving with the headlights on'], c:1, why:'The manual specifically warns against idling a vehicle in a garage or confined space, even if the outside garage door is open.' },
  { id:'safe18', topic:'Vehicle Safety', page:58, q:'When parking facing downhill next to a curb, which way should the front wheels be turned?', a:['Away from the curb','Toward the curb','Straight ahead','Either direction is acceptable'], c:1, why:'For downhill parking, set the brake and turn the wheels toward the curb.' },
  { id:'safe19', topic:'Vehicle Safety', page:58, q:'When parking facing uphill next to a curb, which way should the front wheels be turned?', a:['Toward the curb','Away from the curb','Straight ahead','Toward the center of the road'], c:1, why:'For uphill parking, set the brake and turn the wheels away from the curb.' },
  { id:'safe20', topic:'Vehicle Safety', page:52, q:'What should a driver do before moving a vehicle that has been parked?', a:['Rely only on the rearview mirror','Check around the vehicle and look for people or obstacles','Sound the horn continuously','Move first, then check blind spots'], c:1, why:'The manual recommends looking both behind and in front of the vehicle and checking blind areas before getting underway.' },
  { id:'safe21', topic:'Vehicle Safety', page:46, q:'A vehicle should not be driven when its tires have less than how much tread?', a:['1/32 inch','1/16 inch','1/8 inch','1/4 inch'], c:1, why:'The manual says tires should not be driven with less than 1/16 inch of tread.' },
  { id:'safe22', topic:'Vehicle Safety', page:48, q:'After driving through water, what does the manual recommend for conventional disc and drum brakes?', a:['Pump them gently to test and dry them','Apply the parking brake while moving','Turn the engine off immediately','Avoid using the brakes for several miles'], c:0, why:'For conventional disc and drum brakes, gently pumping them after driving through water can help test and dry them. The manual gives a different instruction for ABS.' },

  // Safe driving rules (Chapter 4)
  { id:'rules01', topic:'Speed & Road Rules', page:62, q:'Unless otherwise posted, what is the maximum speed limit in school zones, business districts, or residential districts?', a:['15 mph','25 mph','35 mph','50 mph'], c:1, why:'The manual lists 25 mph for school zones, business districts, and residential districts, unless otherwise posted.' },
  { id:'rules02', topic:'Speed & Road Rules', page:62, q:'Unless otherwise posted, what speed limit is listed for suburban business and residential districts?', a:['25 mph','30 mph','35 mph','45 mph'], c:2, why:'The manual lists 35 mph for suburban business and residential districts.' },
  { id:'rules03', topic:'Speed & Road Rules', page:62, q:'Unless otherwise posted, what speed limit is listed for non-posted rural roadways?', a:['35 mph','45 mph','50 mph','55 mph'], c:2, why:'The manual lists 50 mph for non-posted rural roadways.' },
  { id:'rules04', topic:'Speed & Road Rules', page:63, q:'If rain, ice, or poor visibility makes the posted speed unsafe, a motorist should:', a:['Continue at the posted limit regardless','Drive faster to leave the area sooner','Reduce speed to match conditions','Follow the vehicle ahead more closely'], c:2, why:'A posted limit is not a guarantee that the speed is safe. Drivers must adjust speed for weather, visibility, traffic, and road conditions.' },
  { id:'rules05', topic:'Speed & Road Rules', page:64, q:'If the center line on your side of a two-way road is broken and the line on the other side is solid, when may you pass?', a:['Never','Only when the road is empty for one mile','When it is safe and the pass is completed before the line becomes solid','Whenever the vehicle ahead is moving slowly'], c:2, why:'Passing is permitted only from the side with the broken line, and the pass must be completed before the center lines become solid.' },
  { id:'rules06', topic:'Speed & Road Rules', page:64, q:'What do double solid center lines mean?', a:['Passing is allowed in both directions','Passing is allowed only during daylight','No passing is allowed','Passing is allowed for motorcycles only'], c:2, why:'Double solid center lines indicate that passing is not allowed.' },
  { id:'rules07', topic:'Speed & Road Rules', page:64, q:'Which is a place where a motorist should not pass another vehicle?', a:['A straight road with a clear view and broken center line','A hill or curve where the driver cannot see far enough ahead','A multilane road when passing is legal','A road with a dashed lane divider'], c:1, why:'The manual prohibits passing on hills or curves when the driver cannot see far enough ahead. It also lists intersections, railroad crossings, and several other restricted areas.' },
  { id:'rules08', topic:'Speed & Road Rules', page:64, q:'When is passing on the right allowed?', a:['Whenever the shoulder is wide enough','On any two-lane road','On roads with multiple same-direction lanes, or when the vehicle ahead is turning left and there is room','Only at night'], c:2, why:'Passing on the right is allowed only in the specific situations described in the manual. Passing on the right shoulder is never allowed.' },
  { id:'rules09', topic:'Speed & Road Rules', page:65, q:'On a multilane roadway, which lane should a motorist normally use when it is available?', a:['The far-left lane','The lane nearest the right edge or curb','Any lane, regardless of purpose','The center lane at all times'], c:1, why:'New Jersey law generally requires motorists to use the rightmost available lane, except when passing or preparing for a left turn.' },
  { id:'rules10', topic:'Speed & Road Rules', page:65, q:'When an emergency vehicle approaches with its siren or flashing lights on, motorists must:', a:['Speed up to stay ahead of it','Yield the right-of-way','Stop in the middle of the intersection','Follow it closely'], c:1, why:'Police cars, fire engines, and ambulances displaying warning signals have the right-of-way; motorists must yield.' },
  { id:'rules11', topic:'Speed & Road Rules', page:67, q:'At a four-way stop, two vehicles arrive at the same time. Which driver should yield?', a:['The driver on the right','The driver on the left','The larger vehicle','The vehicle going straight, in every case'], c:1, why:'When two vehicles arrive at the same time, the vehicle on the left yields to the vehicle on the right.' },
  { id:'rules12', topic:'Speed & Road Rules', page:67, q:'When making a left turn at an intersection, a driver must yield to:', a:['Only vehicles behind them','Oncoming traffic and pedestrians in the crosswalk','Vehicles parked on the left only','No one if the turn signal is on'], c:1, why:'A left-turning driver must yield to oncoming traffic and stop for pedestrians within a crosswalk.' },
  { id:'rules13', topic:'Speed & Road Rules', page:67, q:'At a stop sign, where must a motorist make a complete stop?', a:['Within five feet of the nearest crosswalk or stop line','Only after entering the intersection','At least 25 feet beyond the stop line','Anywhere that offers a view of traffic'], c:0, why:'The manual says to stop within five feet of the nearest crosswalk or stop line before proceeding.' },
  { id:'rules14', topic:'Speed & Road Rules', page:68, q:'A traffic signal is completely dark because of a power failure. How should the intersection be treated?', a:['As a yield sign','As an uncontrolled intersection','As a four-way stop','As a green light for the larger road'], c:2, why:'A traffic signal that is not illuminated because of a malfunction or power failure is treated as a four-way stop.' },
  { id:'rules15', topic:'Speed & Road Rules', page:68, q:'At an uncontrolled intersection, which vehicle generally has the right-of-way when two vehicles approach at the same time?', a:['The vehicle on the left','The vehicle on the right','The faster vehicle','The larger vehicle'], c:1, why:'The manual gives the basic rule that the vehicle on the left yields to the vehicle approaching from the right.' },
  { id:'rules16', topic:'Speed & Road Rules', page:68, q:'A driver entering a main road from a private driveway must:', a:['Expect the main-road traffic to stop','Yield to all traffic on the main road','Enter first if signaling','Yield only to vehicles approaching from the left'], c:1, why:'A motorist coming from a private road or driveway must yield to all traffic on the main road.' },
  { id:'rules17', topic:'Speed & Road Rules', page:66, q:'A pedestrian is in a marked crosswalk. What must a motorist do?', a:['Slow down and drive around the pedestrian','Stop and remain stopped until the pedestrian clears the driver’s lane and the adjacent lane in the same direction','Sound the horn so the pedestrian moves faster','Proceed if the traffic signal is green'], c:1, why:'Drivers must come to a complete stop and remain stopped until the pedestrian has safely cleared the driver’s lane and adjacent lane in the same direction.' },
  { id:'rules18', topic:'Speed & Road Rules', page:66, q:'A vehicle in front of you has stopped to let a pedestrian cross. May you pass it?', a:['Yes, on the left','Yes, if you use the horn','No, never pass a vehicle stopped for a pedestrian at a crosswalk','Yes, if no traffic is coming'], c:2, why:'The manual specifically prohibits passing another vehicle that has stopped for a pedestrian at a crosswalk.' },
  { id:'rules19', topic:'Speed & Road Rules', page:74, q:'A yellow light appears after a green light. When should a driver stop?', a:['Always, even if stopping would be unsafe','Unless the vehicle is too close to stop safely','Only if a police officer is present','Only when pedestrians are present'], c:1, why:'The manual says to stop before entering the intersection when yellow appears, unless the vehicle is too close to stop safely.' },
  { id:'rules20', topic:'Speed & Road Rules', page:68, q:'When entering a highway from an acceleration lane, a motorist should:', a:['Stop at the end of the ramp','Speed up to the flow of traffic and enter the right lane when safe','Enter at any speed and force traffic to brake','Use the shoulder until a gap appears'], c:1, why:'The manual says to accelerate to the flow of traffic, yield, and enter the right-hand lane when safe. Avoid stopping in the acceleration lane.' },
  { id:'rules21', topic:'Speed & Road Rules', page:69, q:'You miss your exit on a highway. What should you do?', a:['Reverse on the shoulder','Make a U-turn through the median','Continue to the next exit','Stop in the exit lane and wait'], c:2, why:'If an exit is missed, go to the next exit. Never back up on an exit ramp or deceleration lane.' },
  { id:'rules22', topic:'Speed & Road Rules', page:70, q:'In a highway weave lane used by both entering and exiting traffic, who must yield?', a:['The motorist entering from the entrance ramp','The motorist leaving the expressway','The vehicle traveling fastest','The vehicle with more passengers'], c:0, why:'The motorist entering from the entrance ramp must yield to the motorist leaving the expressway.' },
  { id:'rules23', topic:'Speed & Road Rules', page:76, q:'When a school bus is stopped with flashing red lights on an ordinary two-lane road, how far away must approaching motorists stop?', a:['10 feet','15 feet','25 feet','50 feet'], c:2, why:'On a two-lane road and certain other roads described in the manual, motorists must stop at least 25 feet from the school bus.' },
  { id:'rules24', topic:'Speed & Road Rules', page:77, q:'On the opposite side of a dual-lane highway separated by a safety island or raised median, what should a motorist do when a school bus is stopped with flashing red lights?', a:['Stop 25 feet away','Slow to 10 mph','Continue at the posted speed','Stop only if children are visible'], c:1, why:'When on the other side of a safety island or raised median on a dual-lane highway, the manual says to slow to 10 mph.' },
  { id:'rules25', topic:'Speed & Road Rules', page:77, q:'When may a motorist pass a school bus stopped directly in front of a school to pick up or drop off children?', a:['At 25 mph','At no more than 10 mph','At the posted speed limit','Only after honking'], c:1, why:'If the school bus is stopped directly in front of a school to pick up or let off children or persons with developmental disabilities, a motorist may pass at no more than 10 mph.' },
  { id:'rules26', topic:'Speed & Road Rules', page:78, q:'A frozen dessert truck approaches with flashing red lights and its stop arm extended. What should a motorist do?', a:['Pass quickly before children approach','Stop, yield to people crossing, and pass at no more than 15 mph','Slow to 25 mph and continue','Stop only if the truck is on the driver’s side'], c:1, why:'The manual requires drivers to stop, watch for children, yield to people crossing, and then pass at no more than 15 mph.' },
  { id:'rules27', topic:'Speed & Road Rules', page:83, q:'When are headlights required by New Jersey law?', a:['Only after full darkness','From one-half hour after sunset to one-half hour before sunrise, and in specified low-visibility conditions','Only on roads without streetlights','Only when it is raining heavily'], c:1, why:'Headlights are required from one-half hour after sunset to one-half hour before sunrise, when visibility is 500 feet or less, when wipers are in use, and in fog, mist, smoke, or similar conditions.' },
  { id:'rules28', topic:'Speed & Road Rules', page:83, q:'When should a driver use low-beam headlights?', a:['When another vehicle is approaching or when following another vehicle','Only on empty rural roads','Whenever driving above 55 mph','Only when parked'], c:0, why:'The manual says dim (low) beams are used in city traffic, when following another vehicle, and when another vehicle is approaching.' },
  { id:'rules29', topic:'Speed & Road Rules', page:83, q:'What should a driver do if an approaching vehicle has high beams on?', a:['Look directly at the headlights','Look toward the right side of the road until the vehicle passes','Turn on high beams and keep them on','Close one eye'], c:1, why:'The manual recommends looking to the right side of the road until the vehicle passes.' },
  { id:'rules30', topic:'Speed & Road Rules', page:85, q:'How close may a vehicle be parked to a fire hydrant?', a:['At least 5 feet away','At least 10 feet away','At least 15 feet away','At least 25 feet away'], c:1, why:'Parking is prohibited within 10 feet of a fire hydrant.' },
  { id:'rules31', topic:'Speed & Road Rules', page:85, q:'Parking is prohibited within how many feet of a railroad crossing?', a:['Within 10 feet','Within 20 feet','Within 25 feet','Within 50 feet'], c:3, why:'The manual says not to stop or park within 50 feet of a railroad crossing.' },
  { id:'rules32', topic:'Speed & Road Rules', page:85, q:'New Jersey law prohibits parking within how many feet of a stop sign?', a:['10 feet','20 feet','25 feet','50 feet'], c:3, why:'The manual lists 50 feet as the prohibited parking distance from a stop sign.' },
  { id:'rules33', topic:'Speed & Road Rules', page:84, q:'A vehicle parked on a street must be no more than how far from the curb?', a:['Two inches','Six inches','Twelve inches','Eighteen inches'], c:1, why:'The manual says it is illegal to park more than six inches from the curb.' },
  { id:'rules34', topic:'Speed & Road Rules', page:85, q:'Which statement about handheld cell phone use while driving is correct?', a:['It is legal when moving under 25 mph','It is prohibited on public roads and is a primary offense','It is legal if the driver uses speakerphone','It is prohibited only for drivers under 21'], c:1, why:'The manual says handheld electronic-device use, including handheld calls and texting, is prohibited while driving on public roads and is a primary offense.' },
  { id:'rules35', topic:'Speed & Road Rules', page:85, q:'Under which circumstance may a driver use a handheld phone while operating a vehicle?', a:['To check traffic reports','To change a music playlist','In specified emergencies such as a fire, crash, serious road hazard, or medical emergency','Whenever the vehicle is stopped at a red light'], c:2, why:'The manual lists limited emergency situations, including fire, a traffic crash, serious road hazard, medical emergency, or hazardous-material emergency.' },
  { id:'rules36', topic:'Speed & Road Rules', page:87, q:'What does New Jersey law require for trash carried in a vehicle?', a:['It must be placed in the trunk','It must be covered so it does not litter the roadway','It may be discarded only on rural roads','It must be secured only when driving on highways'], c:1, why:'Trash and debris carried in a vehicle must be covered. Throwing litter from a moving or parked vehicle is illegal.' },
    // Defensive driving (Chapter 5)
  { id:'def01', topic:'Defensive Driving', page:95, q:'What is the purpose of the three-second-plus following rule?', a:['To measure how long a traffic light stays green','To maintain a safe following distance','To determine when to change lanes','To estimate a vehicle’s top speed'], c:1, why:'The three-second-plus rule helps drivers maintain space and time to react if the vehicle ahead stops unexpectedly. More distance may be needed in poor conditions.' },
  { id:'def02', topic:'Defensive Driving', page:91, q:'Which set lists the four types of driving distractions described in the manual?', a:['Visual, manual, cognitive, and auditory','Physical, emotional, mechanical, and visual','Manual, spatial, chemical, and auditory','Visual, weather, mechanical, and mental'], c:0, why:'The four categories are visual (eyes), manual (hands), cognitive (mind/attention), and auditory (sound-related).' },
  { id:'def03', topic:'Defensive Driving', page:91, q:'A driver looks down to read a text message. Which distraction is directly involved?', a:['Visual and manual','Auditory only','Weather-related only','Mechanical only'], c:0, why:'Reading a text takes the driver’s eyes off the road (visual) and usually hands off the wheel (manual).' },
  { id:'def04', topic:'Defensive Driving', page:92, q:'What does the manual say about driving while extremely tired?', a:['It improves after opening a window','It can be as dangerous as drunk driving','It affects only long-distance truck drivers','It is safe if the radio is loud'], c:1, why:'The manual warns that fatigue slows reaction time and can make a driver as dangerous as a drunk driver.' },
  { id:'def05', topic:'Defensive Driving', page:92, q:'What is “highway hypnosis”?', a:['A driver’s ability to memorize road signs','A trance-like state that can occur during long periods of driving','A vehicle braking problem','A type of traffic signal'], c:1, why:'Highway hypnosis is a trance-like state that may occur when a motorist has been driving for a long time.' },
  { id:'def06', topic:'Defensive Driving', page:93, q:'How often does the manual recommend that a motorist rest during a long drive?', a:['Every 30 minutes','Every hour','Every two hours','Only when the fuel tank is empty'], c:2, why:'The manual recommends resting every two hours and/or sharing the driving with another licensed motorist.' },
  { id:'def07', topic:'Defensive Driving', page:94, q:'Why should a driver avoid tailgating?', a:['It increases reaction time','It reduces the time and distance available to respond to a sudden stop','It makes brakes wear less quickly','It improves visibility around curves'], c:1, why:'Following too closely reduces the space available to react and stop, increasing the risk of rear-end crashes.' },
  { id:'def08', topic:'Defensive Driving', page:91, q:'Which action is an example of aggressive driving?', a:['Maintaining a safe following distance','Weaving through traffic and making unsafe lane changes','Yielding to emergency vehicles','Slowing down in poor weather'], c:1, why:'The manual lists speeding, tailgating, weaving, illegal passing, and unsafe lane changes among aggressive-driving behaviors.' },
  { id:'def09', topic:'Defensive Driving', page:111, q:'When must a motorist notify the police after a crash under the manual?', a:['Only when the vehicle cannot be driven','When there is injury, death, or vehicle/property damage','Only when another driver asks','Only when the crash occurs on a highway'], c:1, why:'The manual says crashes involving injury, death, or vehicle/property damage must be reported to police.' },
  { id:'def10', topic:'Defensive Driving', page:111, q:'If property damage exceeds $500 or someone is injured, when must a written report be sent to the MVC if no police report is filed?', a:['Within 24 hours','Within 5 days','Within 10 days','Within 30 days'], c:2, why:'The manual requires a written report to the MVC within 10 days if no police report is filed.' },
  { id:'def11', topic:'Defensive Driving', page:90, q:'A vehicle begins to skid. Which general response is safest?', a:['Brake hard and turn sharply against the skid','Ease off the accelerator and steer in the direction you want the vehicle to go','Accelerate quickly','Close your eyes and hold the wheel straight'], c:1, why:'The manual’s defensive-driving guidance emphasizes smooth control and avoiding abrupt steering or braking. Ease off the accelerator and steer where you want the vehicle to travel.' },
  { id:'def12', topic:'Defensive Driving', page:90, q:'What is the safest approach when another driver is behaving aggressively?', a:['Compete with the driver to get ahead','Make eye contact and gesture','Avoid engaging and give the driver space','Brake suddenly to warn the driver'], c:2, why:'The manual recommends remaining calm, avoiding aggressive responses, and focusing on safe driving.' },
  { id:'def13', topic:'Defensive Driving', page:93, q:'If a vehicle must pull off the road, what should the driver do?', a:['Turn on emergency flashers','Leave the vehicle in the travel lane','Turn off all lights and wait','Stand behind the vehicle in the roadway'], c:0, why:'The manual says to activate emergency flashers when pulling off the road.' },
  { id:'def14', topic:'Defensive Driving', page:89, q:'What is a defensive driver expected to do?', a:['Assume other drivers will always obey the rules','Anticipate hazards and be prepared to respond safely','Drive at the maximum posted speed at all times','Focus only on the vehicle directly ahead'], c:1, why:'Defensive driving requires awareness, anticipating possible hazards, and maintaining time and space to react.' },

  // Alcohol, drugs, and health (Chapter 6)
  { id:'imp01', topic:'Alcohol & Drugs', page:115, q:'For most adult drivers in New Jersey, driving with a blood alcohol concentration (BAC) of what level or higher is illegal?', a:['0.01%','0.04%','0.08%','0.10%'], c:2, why:'The manual states that it is illegal to drive with a BAC of 0.08 percent or higher. A driver may also be illegal to drive while under the influence even below that level.' },
  { id:'imp02', topic:'Alcohol & Drugs', page:115, q:'For drivers younger than 21, what BAC level or higher is illegal under New Jersey’s underage-driver rule?', a:['0.01%','0.03%','0.05%','0.08%'], c:0, why:'For individuals younger than 21, the manual states that driving with a BAC of 0.01 percent or higher is illegal.' },
  { id:'imp03', topic:'Alcohol & Drugs', page:114, q:'What is the only thing that makes a person sober after drinking alcohol?', a:['Coffee','A cold shower','Exercise','Time'], c:3, why:'The manual explains that alcohol is removed slowly by the body and that only time makes a person sober. “Sober-up-quick” methods do not work.' },
  { id:'imp04', topic:'Alcohol & Drugs', page:115, q:'Which statement about food and alcohol is correct?', a:['Eating makes a person sober','Food may slow alcohol absorption but does not make a driver sober','Eating prevents BAC from rising','A large meal cancels the effects of alcohol'], c:1, why:'Food can slow absorption, but it does not make someone sober or prevent a high BAC when drinking heavily.' },
  { id:'imp05', topic:'Alcohol & Drugs', page:115, q:'Which group of factors affects a person’s BAC?', a:['Height, eye color, and shoe size','Quantity consumed, body weight, drinking speed, and food eaten','Vehicle speed and road conditions','Age of the vehicle and number of passengers'], c:1, why:'The manual lists quantity of alcohol, body weight, how quickly drinks are consumed, and food eaten as BAC factors.' },
  { id:'imp06', topic:'Alcohol & Drugs', page:115, q:'What is the best way to reduce the risk of a crash caused by drinking?', a:['Drink coffee before driving','Wait 15 minutes after the last drink','Do not drive after drinking','Open the windows while driving'], c:2, why:'The manual says the best way to reduce this risk is not to drive at all after drinking; arrange a designated driver, public transportation, or a cab.' },
  { id:'imp07', topic:'Alcohol & Drugs', page:115, q:'In New Jersey, refusing to take a breath test is:', a:['Always permitted','Illegal and can lead to penalties','Allowed for drivers under 21 only','Treated as a parking violation'], c:1, why:'The manual states that refusal to take a breath test is illegal and can result in loss of driving privileges, fines, IDRC referral, and an ignition interlock.' },
  { id:'imp08', topic:'Alcohol & Drugs', page:115, q:'Which statement about different alcoholic beverages is correct?', a:['Beer always contains less alcohol than wine','The amount of alcohol depends only on the beverage type','A standard serving of beer, wine, or liquor can contain about the same amount of alcohol','Only liquor affects driving ability'], c:2, why:'The manual compares 1.5 ounces of 80-proof liquor, 12 ounces of beer, and 5 ounces of wine as containing about the same amount of alcohol.' },

  // Sharing the road (Chapter 8)
  { id:'share01', topic:'Sharing the Road', page:144, q:'When driving near pedestrians, who has the primary obligation to prevent vehicle-pedestrian crashes?', a:['The pedestrian only','The driver','The vehicle manufacturer','The nearest passenger'], c:1, why:'The manual describes pedestrian safety as shared, but says drivers bear the primary obligation to prevent vehicle-pedestrian crashes.' },
  { id:'share02', topic:'Sharing the Road', page:146, q:'Under New Jersey’s Safe Passing Law, how much space should a driver allow when passing a vulnerable road user on a single-lane road?', a:['At least one foot','At least two feet','At least four feet','At least six feet'], c:2, why:'The Safe Passing Law requires at least four feet when passing on a single-lane road.' },
  { id:'share03', topic:'Sharing the Road', page:146, q:'If a driver cannot leave four feet when passing a vulnerable road user, what should the driver do?', a:['Pass at the posted speed','Slow to 25 mph and be prepared to stop until it is safe','Sound the horn and pass','Move into the opposing lane without checking'], c:1, why:'If four feet is not possible, the driver must slow to 25 mph and be prepared to stop until it is safe to pass.' },
  { id:'share04', topic:'Sharing the Road', page:146, q:'When passing a vulnerable road user, what should a driver do when it is possible?', a:['Move over one lane','Stay in the same lane and accelerate','Drive on the shoulder','Flash high beams'], c:0, why:'The Safe Passing Law directs drivers to move over one lane when possible.' },
  { id:'share05', topic:'Sharing the Road', page:147, q:'Before turning right, what should a driver check for besides motor vehicles?', a:['Only parked cars','Bicyclists, skateboarders, and inline skaters','Only vehicles behind','Only pedestrians on the left'], c:1, why:'The manual warns drivers to check for bicyclists and other vulnerable road users before turning right and not to turn across their path.' },
  { id:'share06', topic:'Sharing the Road', page:147, q:'Why are motorcycles easy for other drivers to miss?', a:['They always travel below the speed limit','They are smaller and can be difficult to detect in traffic','They cannot use headlights','They always stay in blind spots'], c:1, why:'The manual says a driver’s failure to detect and recognize motorcycles is the most common cause of motorcycle crashes.' },
  { id:'share07', topic:'Sharing the Road', page:147, q:'Where should you avoid driving alongside a large truck?', a:['Only directly in front','In its no-zones or blind spots','Only in the far-right lane','Only on a downhill grade'], c:1, why:'A truck’s no-zones are areas where the truck driver cannot see nearby vehicles. Stay out of the blind spots.' },
  { id:'share08', topic:'Sharing the Road', page:147, q:'When passing a truck, when is it safe to move back in front of it?', a:['As soon as the truck cab disappears from the side mirror','When the entire front of the truck is visible in your rearview mirror','Immediately after reaching the truck’s front wheel','After signaling for one second'], c:1, why:'The manual says not to pull in front of a truck until the whole front of the truck can be seen in the rearview mirror.' },
  { id:'share09', topic:'Sharing the Road', page:147, q:'In bad weather, a large truck may take how much longer to stop than usual?', a:['5% longer','10% longer','25% longer','50% longer'], c:2, why:'The manual notes that during bad weather a truck, tractor-trailer, or bus can take as much as 25 percent longer to stop.' },
  { id:'share10', topic:'Sharing the Road', page:149, q:'Why might a large truck swing left before making a right turn?', a:['To let cars pass on the right','Because its size may require extra space to complete the turn','Because right turns are prohibited for trucks','To signal that it is stopping'], c:1, why:'Large vehicles may need to swing wide, slow down, or back up to negotiate a turn. Drivers should give them extra room.' },
  { id:'share11', topic:'Sharing the Road', page:150, q:'When must motorists yield to a school or commercial bus under the bus re-entry rule?', a:['Whenever a bus changes lanes','When the bus is re-entering traffic after picking up or dropping off passengers','Only when the bus is on a highway','Only when the bus driver flashes headlights'], c:1, why:'Non-emergency vehicles must yield to buses re-entering traffic after passenger pickup or drop-off. The rule does not require yielding to a bus that is already in normal traffic merely changing lanes.' },
  { id:'share12', topic:'Sharing the Road', page:148, q:'What should a motorist do when a truck ahead is preparing to back up?', a:['Pass closely behind it','Stay far behind and give it room','Drive into the area beside the trailer','Sound the horn and move closer'], c:1, why:'The area behind a backing truck is a no-zone. Stay far behind and never pass close behind it.' },
  { id:'share13', topic:'Sharing the Road', page:152, q:'Why should a driver leave extra space when stopping behind a large truck on an uphill grade?', a:['The truck may roll backward slightly when starting','The truck may need to make a U-turn','The truck’s brake lights are not visible','The truck is required to reverse'], c:0, why:'The manual warns that larger vehicles may roll backward slightly when starting, especially uphill.' },
  { id:'share14', topic:'Sharing the Road', page:151, q:'After dark, what lighting equipment must a bicycle have according to the manual?', a:['A front light, a rear light, and a rear reflector','A blue light on each wheel','A flashing red light in front only','No lights if the rider wears reflective clothing'], c:0, why:'Bicycles ridden after dark must have front and rear lights and a rear reflector.' },
  { id:'share15', topic:'Sharing the Road', page:151, q:'When a bicyclist is moving through an intersection, what should a motorist signaling a right turn do?', a:['Turn in front of the bicyclist','Yield and wait until the intersection clears','Sound the horn and proceed','Move into the bicycle lane'], c:1, why:'The manual says motorists signaling a right turn must yield to bicyclists, skateboarders, or inline skaters moving through an intersection.' },
  { id:'share16', topic:'Sharing the Road', page:150, q:'What is the maximum speed for a moped on public roadways?', a:['15 mph','20 mph','25 mph','35 mph'], c:2, why:'The manual states that moped drivers may not exceed 25 mph.' },
  { id:'share17', topic:'Sharing the Road', page:154, q:'How should a motorist respond when passing a horse or horse-drawn vehicle?', a:['Maintain the posted speed','Reduce speed to 25 mph or less and proceed with caution','Sound the horn repeatedly','Pass as closely as possible'], c:1, why:'The manual requires motorists to reduce speed to 25 mph or less and proceed with caution when approaching or passing a horse or horse-drawn vehicle.' },

  // Railroad crossings, signs, markings, and vehicle information
  { id:'sign01', topic:'Signs & Markings', page:214, q:'What is the usual shape and color of a warning sign?', a:['Red octagon','Yellow diamond','White rectangle','Green circle'], c:1, why:'Warning signs are generally yellow and diamond-shaped with a black symbol or message.' },
  { id:'sign02', topic:'Signs & Markings', page:214, q:'What shape is used for a STOP sign?', a:['Triangle','Circle','Octagon','Pennant'], c:2, why:'A STOP sign is a red octagon with white wording and border.' },
  { id:'sign03', topic:'Signs & Markings', page:214, q:'What shape identifies a YIELD sign?', a:['Inverted triangle','Pentagon','Round sign','Pennant'], c:0, why:'A YIELD sign is an inverted triangle.' },
  { id:'sign04', topic:'Signs & Markings', page:214, q:'What does a yellow pennant-shaped sign warn drivers about?', a:['A school crossing','A no-passing zone','A railroad crossing','A hospital'], c:1, why:'The manual’s sign chart identifies the yellow pennant as a no-passing warning sign.' },
  { id:'sign05', topic:'Signs & Markings', page:214, q:'What does a yellow pentagon-shaped sign generally indicate?', a:['A school area or school crossing','A railroad crossing','A speed limit','A motorist service'], c:0, why:'The manual’s sign chart identifies the yellow pentagon as a school sign.' },
  { id:'sign06', topic:'Signs & Markings', page:214, q:'What does a yellow circular sign with an RR symbol warn about?', a:['A roundabout','A railroad crossing ahead','A school bus stop','A no-passing zone'], c:1, why:'A yellow round advance-warning sign alerts motorists to a railroad crossing ahead.' },
  { id:'sign07', topic:'Signs & Markings', page:216, q:'What do yellow center lines separate?', a:['Traffic moving in opposite directions','Traffic moving in the same direction','The shoulder from the travel lane','Bicycle lanes from sidewalks'], c:0, why:'Yellow center lines separate traffic flowing in opposite directions.' },
  { id:'sign08', topic:'Signs & Markings', page:216, q:'What do white lane lines generally separate?', a:['Traffic moving in opposite directions','Traffic moving in the same direction','Railroad tracks','Parking areas from sidewalks'], c:1, why:'White lines separate traffic moving in the same direction and can mark the edge of a roadway.' },
  { id:'sign09', topic:'Signs & Markings', page:216, q:'What does a solid yellow line on your side of the center line mean?', a:['Passing is permitted at any time','Do not pass','The road is one-way','The lane is reserved for buses'], c:1, why:'A solid yellow line on your side means do not pass. A pass is allowed only when the dashed line is on your side and it is safe.' },
  { id:'sign10', topic:'Signs & Markings', page:216, q:'What do white diamond pavement markings indicate?', a:['A railroad crossing','A high-occupancy-vehicle (HOV) lane','A school zone','A pedestrian-only street'], c:1, why:'White diamonds mark HOV lanes reserved for the vehicle types or vehicles carrying the number of occupants specified by signs.' },
  { id:'sign11', topic:'Signs & Markings', page:215, q:'What do orange diamond-shaped signs usually indicate?', a:['Construction or maintenance warnings','Motorist services','Route guidance','A required stop'], c:0, why:'Orange diamond-shaped signs warn of temporary road work and maintenance conditions.' },
  { id:'sign12', topic:'Signs & Markings', page:215, q:'In New Jersey, what happens to traffic fines in work zones?', a:['They are reduced','They are doubled','They are waived if workers are absent','They apply only to commercial drivers'], c:1, why:'The manual says all traffic fines are doubled in work zones.' },
  { id:'sign13', topic:'Signs & Markings', page:216, q:'What do white stop lines show?', a:['Where to stop at stop signs or traffic signals','Where passing is allowed','Where a bicycle lane ends','Where the speed limit increases'], c:0, why:'White stop lines mark where motorists must stop at stop signs or traffic signals.' },
  { id:'sign14', topic:'Signs & Markings', page:217, q:'What does a fluorescent orange triangle on the rear of a vehicle indicate?', a:['The vehicle is carrying hazardous materials','The vehicle is moving slowly','The vehicle is a school bus','The vehicle is part of a funeral procession'], c:1, why:'The fluorescent orange triangle warns that the vehicle is slow-moving, such as farm or construction equipment.' },
  { id:'sign15', topic:'Signs & Markings', page:218, q:'What is a roundabout?', a:['A one-way circular intersection around a center island','A road with two opposing one-way lanes','A highway entrance lane','A pedestrian-only crossing'], c:0, why:'The manual defines a roundabout as a one-way circular intersection in which traffic flows around a center island.' },
  { id:'sign16', topic:'Signs & Markings', page:217, q:'What does an X-shaped railroad crossbuck sign mean?', a:['The driver has priority over trains','Yield the right-of-way to trains','Stop only if a train is visible','Railroad tracks are closed'], c:1, why:'The crossbuck is a yield sign for railroad crossings. Motorists must yield to trains.' },
  { id:'sign17', topic:'Signs & Markings', page:217, q:'What do solid white lane lines generally mean?', a:['Lane changes are discouraged or restricted where the marking applies','Passing is always allowed','Traffic moves in opposite directions','The road is ending'], c:0, why:'Solid white lane markings discourage or restrict lane changes; follow the lane markings and signs.' },
  { id:'sign18', topic:'Signs & Markings', page:217, q:'What do road arrows painted in a lane indicate when used with signs?', a:['The correct direction a motorist must take in that lane','The road’s speed limit','The distance to the next exit','Where pedestrians should stand'], c:0, why:'Road arrows, when used with signs, show the direction motorists must take from that lane.' },
  { id:'sign19', topic:'Signs & Markings', page:153, q:'What should a motorist do when approaching a railroad crossing with flashing red lights or lowered gates?', a:['Drive around the gate if no train is nearby','Stop and never drive through the warning','Stop only if another vehicle stops','Speed up to cross before the train'], c:1, why:'Motorists must never drive through flashing red lights or around descending or lowered gates. Trains always have the right-of-way.' },
  { id:'sign20', topic:'Signs & Markings', page:153, q:'When approaching railroad tracks, what must a driver ensure before entering the crossing?', a:['There is room on the other side to clear the tracks completely','The vehicle ahead is moving quickly','The radio is turned up','There is a shoulder beside the tracks'], c:0, why:'Do not enter a railroad crossing unless there is enough room to get completely across without stopping.' },
  { id:'sign21', topic:'Vehicle Information', page:158, q:'Before a New Jersey resident drives a newly purchased vehicle on public roads, the vehicle must be:', a:['Only inspected','Titled, registered, and insured','Only registered','Titled but not insured'], c:1, why:'The manual says a new or used vehicle must be titled, registered, and insured before it is driven on public roads.' },
  { id:'sign22', topic:'Vehicle Information', page:158, q:'A person moving into New Jersey with an out-of-state vehicle generally must title and register it within:', a:['10 days','30 days','60 days','One year'], c:2, why:'The manual states that a vehicle must be titled and registered within 60 days after moving into New Jersey, or sooner if the previous registration expires.' },
  { id:'sign23', topic:'Vehicle Information', page:45, q:'What should a motorist do if the vehicle pulls to one side while braking or makes unusual grinding sounds?', a:['Ignore it if the vehicle still moves','Have the brakes checked','Use the parking brake instead','Drive only at night'], c:1, why:'The manual says unusual brake behavior, squealing, or grinding should prompt a brake inspection.' },
  { id:'sign24', topic:'Vehicle Information', page:46, q:'If a vehicle’s turn signals do not work, what does the manual say the motorist should do?', a:['Use hand signals until the turn signals are repaired','Stop signaling entirely','Use the horn for every turn','Use hazard lights instead of turn signals'], c:0, why:'The manual says turn signals must be repaired as soon as possible and hand signals should be used until then.' },
  { id:'sign25', topic:'Vehicle Information', page:47, q:'Which condition can allow carbon monoxide to enter or accumulate around a vehicle?', a:['A clean exhaust system','An exhaust leak or poorly tuned engine','A full fuel tank','A properly closed glove compartment'], c:1, why:'An exhaust leak or poorly tuned engine is listed as a potential source of dangerous carbon monoxide exposure.' },
  { id:'sign26', topic:'Vehicle Information', page:45, q:'What should a motorist do if the windshield wipers do not work?', a:['Drive faster to reduce rain exposure','Have them repaired before driving in conditions that require them','Use high beams instead','Open the trunk'], c:1, why:'The manual says windshield wipers should always work; clear visibility is essential for safe driving.' }
];

const PASS_TARGET = 40;
const FAIL_LIMIT = 11;
const EXAM_SIZE = 50;
const LETTERS = ['A', 'B', 'C', 'D'];
const $ = (id) => document.getElementById(id);

const views = {
  welcome: $('welcome-view'),
  quiz: $('quiz-view'),
  result: $('result-view')
};

let exam = null;

function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function prepareQuestion(question, number) {
  const optionOrder = shuffle([0, 1, 2, 3]);
  const options = optionOrder.map((originalIndex) => question.a[originalIndex]);

  return {
    id: question.id,
    topic: question.topic,
    page: question.page,
    prompt: question.q,
    options,
    correctIndex: optionOrder.indexOf(question.c),
    explanation: question.why,
    examNumber: number
  };
}

function showView(name) {
  Object.entries(views).forEach(([key, element]) => {
    element.classList.toggle('hidden', key !== name);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function beginPractice({ mode, questions, total, chapterNumber = null }) {
  const prepared = questions.map((q, i) => prepareQuestion(q, i + 1));

  exam = {
    mode,
    total,
    chapterNumber,
    chapterTitle: chapterNumber ? CHAPTER_CONFIG[chapterNumber].short : null,
    queue: prepared,
    current: null,
    correct: 0,
    wrong: 0,
    skipped: 0,
    answeredIds: new Set(),
    selectedIndex: null,
    feedbackShown: false,
    ended: false
  };

  exam.current = exam.queue.shift();

  showView('quiz');
  renderQuestion();
  updateStats();
}

function startExam() {
  const chosen = shuffle(QUESTION_BANK).slice(0, EXAM_SIZE);

  beginPractice({
    mode: 'state',
    questions: chosen,
    total: EXAM_SIZE
  });
}

function startChapterTest(chapterNumber) {
  const number = Number(chapterNumber);
  const config = CHAPTER_CONFIG[number];
  const bank = CHAPTER_BANKS[number];

  if (!config || !bank || bank.length !== 30) {
    window.alert('This chapter practice set is unavailable. Please refresh the page.');
    return;
  }

  beginPractice({
    mode: 'chapter',
    questions: shuffle(bank),
    total: 30,
    chapterNumber: number
  });
}

function startAnotherPractice() {
  if (exam && exam.mode === 'chapter') {
    startChapterTest(exam.chapterNumber);
  } else {
    startExam();
  }
}

function updateStats() {
  if (!exam) return;

  const answered = exam.correct + exam.wrong;

  $('correct-count').textContent = exam.correct;
  $('wrong-count').textContent = exam.wrong;
  $('skipped-count').textContent = exam.skipped;

  $('answered-count').innerHTML =
    `${answered}<span class="stat-denominator"> / ${exam.total}</span>`;

  $('progress-label').textContent =
    `${answered} of ${exam.total} answered`;

  $('progress-fill').style.width =
    `${Math.min(100, (answered / exam.total) * 100)}%`;
}

function renderQuestion() {
  if (!exam || exam.ended) return;

  const q = exam.current;

  exam.selectedIndex = null;
  exam.feedbackShown = false;

  $('question-number').textContent =
    `QUESTION ${String(q.examNumber).padStart(2, '0')} / ${exam.total}`;

  $('quiz-kicker').innerHTML =
    `<span class="eyebrow-line"></span> ${
      exam.mode === 'chapter'
        ? `CHAPTER ${String(exam.chapterNumber).padStart(2, '0')} PRACTICE`
        : 'STATE EXAM PRACTICE'
    } `;

  $('quiz-heading').textContent =
    exam.mode === 'chapter'
      ? `Chapter ${exam.chapterNumber}: ${exam.chapterTitle}`
      : 'Knowledge test';

  $('progress-heading').textContent =
    exam.mode === 'chapter' ? 'Chapter progress' : 'Exam progress';

  $('threshold-track').classList.toggle(
    'hidden',
    exam.mode === 'chapter'
  );

  $('end-early-button').textContent =
    exam.mode === 'chapter' ? 'End practice' : 'End test';

  $('topic-tag').textContent = q.topic.toUpperCase();
  $('question-text').textContent = q.prompt;

  $('answer-list').innerHTML = '';

  $('feedback-panel').className = 'feedback-panel hidden';
  $('feedback-panel').innerHTML = '';

  $('submit-button').classList.remove('hidden');
  $('submit-button').disabled = true;

  $('next-button').classList.add('hidden');
  $('skip-button').disabled = false;

  q.options.forEach((answer, index) => {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'answer-option';
    button.setAttribute('role', 'radio');
    button.setAttribute('aria-checked', 'false');
    button.dataset.index = String(index);

    button.innerHTML =
      `<span class="answer-letter">${LETTERS[index]}</span>
       <span class="answer-text"></span>`;

    button.querySelector('.answer-text').textContent = answer;

    button.addEventListener('click', () => selectAnswer(index));

    $('answer-list').appendChild(button);
  });

  updateStats();
}

function selectAnswer(index) {
  if (!exam || exam.feedbackShown) return;

  exam.selectedIndex = index;

  [...$('answer-list').children].forEach((button, i) => {
    const selected = i === index;

    button.classList.toggle('selected', selected);
    button.setAttribute('aria-checked', String(selected));
  });

  $('submit-button').disabled = false;
}

function submitAnswer() {
  if (!exam || exam.feedbackShown || exam.selectedIndex === null) return;

  const q = exam.current;
  const chosen = exam.selectedIndex;
  const isCorrect = chosen === q.correctIndex;

  exam.feedbackShown = true;
  exam.answeredIds.add(q.id);

  if (isCorrect) {
    exam.correct += 1;
  } else {
    exam.wrong += 1;
  }

  [...$('answer-list').children].forEach((button, i) => {
    button.disabled = true;

    if (i === q.correctIndex) {
      button.classList.add('correct-answer');
    }

    if (i === chosen && !isCorrect) {
      button.classList.add('wrong-answer');
    }

    if (i === q.correctIndex) {
      const marker = document.createElement('span');

      marker.className = 'answer-status';
      marker.textContent = '✓';
      marker.setAttribute('aria-label', 'Correct answer');

      button.appendChild(marker);
    }
  });

  const panel = $('feedback-panel');
  const rightLetter = LETTERS[q.correctIndex];

  const answerLine = isCorrect
    ? `Your answer: ${rightLetter}. ${q.options[q.correctIndex]}`
    : `Correct answer: ${rightLetter}. ${q.options[q.correctIndex]}`;

  panel.className =
    `feedback-panel ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;

  panel.innerHTML = `
    <div class="feedback-heading">
      <span>${isCorrect ? '✓' : '×'}</span>
      <span>${isCorrect ? 'Correct' : 'Not quite'}</span>
    </div>
    <div class="feedback-answer"></div>
    <p class="feedback-explanation"></p>
    <span class="feedback-source">
      2026 NJ DRIVER MANUAL · PAGE ${q.page}
    </span>`;

  panel.querySelector('.feedback-answer').textContent = answerLine;
  panel.querySelector('.feedback-explanation').textContent = q.explanation;

  $('submit-button').classList.add('hidden');
  $('skip-button').disabled = true;
  $('next-button').classList.remove('hidden');

  updateStats();

  // State examination automatic pass/fail rules.
  if (exam.mode === 'state' && exam.correct >= PASS_TARGET) {
    finishExam(
      'pass',
      'You reached 40 correct answers, the required passing score.'
    );

  } else if (exam.mode === 'state' && exam.wrong >= FAIL_LIMIT) {
    finishExam(
      'fail',
      'You reached 11 incorrect answers, which is the automatic-fail limit.'
    );

  } else if (exam.answeredIds.size === exam.total) {

    if (exam.mode === 'chapter') {
      const percent = Math.round((exam.correct / exam.total) * 100);

      finishExam(
        'complete',
        `You scored ${exam.correct} out of ${exam.total} (${percent}%).`
      );

    } else {
      finishExam(
        exam.correct >= PASS_TARGET ? 'pass' : 'fail',
        exam.correct >= PASS_TARGET
          ? 'You answered at least 40 of 50 questions correctly.'
          : 'You completed all 50 questions but did not reach 40 correct answers.'
      );
    }
  }
}

function skipQuestion() {
  if (!exam || exam.feedbackShown) return;

  // Put the skipped question at the end of the queue.
  exam.queue.push(exam.current);
  exam.skipped += 1;

  exam.current = exam.queue.shift();

  renderQuestion();
}

function nextQuestion() {
  if (!exam || !exam.feedbackShown || exam.ended) return;

  if (exam.queue.length === 0) {

    if (exam.mode === 'chapter') {
      const percent = Math.round((exam.correct / exam.total) * 100);

      finishExam(
        'complete',
        `You scored ${exam.correct} out of ${exam.total} (${percent}%).`
      );

    } else {
      finishExam(
        exam.correct >= PASS_TARGET ? 'pass' : 'fail',
        'You completed the question set.'
      );
    }

    return;
  }

  exam.current = exam.queue.shift();
  renderQuestion();
}

function finishExam(outcome, detail) {
  if (!exam || exam.ended) return;

  exam.ended = true;

  const answered = exam.correct + exam.wrong;
  const isChapter = exam.mode === 'chapter';
  const passed = outcome === 'pass';
  const endedEarly = isChapter && outcome === 'incomplete';

  $('result-icon').textContent =
    (isChapter || passed) ? '✓' : '×';

  $('result-icon').classList.toggle('fail', !isChapter && !passed);

  if (isChapter) {
    $('result-eyebrow').textContent =
      endedEarly ? 'CHAPTER PRACTICE ENDED' : 'CHAPTER PRACTICE COMPLETE';

    $('result-title').textContent =
      endedEarly ? 'Practice ended.' : 'Chapter complete.';

    $('result-subtitle').textContent =
      `Chapter ${exam.chapterNumber}: ${exam.chapterTitle}`;

    $('new-test-button').textContent =
      `Retake Chapter ${exam.chapterNumber} practice →`;

    $('result-detail').textContent =
      detail || `You scored ${exam.correct} out of ${exam.total} (${Math.round((exam.correct / exam.total) * 100)}%).`;

    $('result-disclaimer').textContent =
      'Chapter practice includes all 30 questions in that chapter. Skipped questions are moved to the end of the queue.';

  } else {
    $('result-eyebrow').textContent =
      passed ? 'PASSING SCORE REACHED' : 'AUTOMATIC FAIL';

    $('result-title').textContent =
      passed ? 'You passed.' : 'Test not passed.';

    $('result-subtitle').textContent =
      passed
        ? 'You reached the required passing score.'
        : 'You reached the incorrect-answer limit or finished below the passing score.';

    $('new-test-button').textContent =
      'Take another state exam →';

    $('result-detail').textContent = detail;

    $('result-disclaimer').textContent =
      'Every new attempt selects 50 different questions from the practice bank. Questions may appear again on later attempts.';
  }

  $('result-correct').textContent = exam.correct;
  $('result-wrong').textContent = exam.wrong;
  $('result-answered').textContent = answered;

  $('result-progress-fill').style.width =
    `${(exam.correct / exam.total) * 100}%`;

  const lastAnswer = $('result-last-answer');

  if (exam.feedbackShown && exam.current) {
    const lastCorrect =
      exam.selectedIndex === exam.current.correctIndex;

    const lastLine = lastCorrect
      ? 'Final answer: Correct.'
      : `Final answer: Incorrect. Correct answer: ${LETTERS[exam.current.correctIndex]}. ${exam.current.options[exam.current.correctIndex]}`;

    lastAnswer.textContent =
      `${lastLine} ${exam.current.explanation} (2026 NJ Driver Manual, page ${exam.current.page}.)`;

    lastAnswer.classList.remove('hidden');

  } else {
    lastAnswer.textContent = '';
    lastAnswer.classList.add('hidden');
  }

  showView('result');
}

function goHome() {
  exam = null;
  showView('welcome');
}

function init() {
  $('bank-count').textContent = `${QUESTION_BANK.length}`;

 // Attach a click event directly to every chapter card.
  document.querySelectorAll('.chapter-card[data-chapter]').forEach((card) => {
    card.addEventListener('click', () => {
      startChapterTest(card.dataset.chapter);
    });
  });

  $('start-button').addEventListener('click', startExam);
  $('new-test-button').addEventListener('click', startAnotherPractice);
  $('home-button').addEventListener('click', goHome);
  $('home-link').addEventListener('click', goHome);

  $('brand-home').addEventListener('click', (event) => {
    event.preventDefault();
    goHome();
  });

  $('submit-button').addEventListener('click', submitAnswer);
  $('skip-button').addEventListener('click', skipQuestion);
  $('next-button').addEventListener('click', nextQuestion);

  $('end-early-button').addEventListener('click', () => {
    if (!exam || exam.ended) return;

    const confirmed = window.confirm(
      exam.mode === 'chapter'
        ? 'End this chapter practice now? Unanswered questions will not count toward your score.'
        : 'End this test now? Unanswered questions will not count as correct.'
    );

    if (confirmed) {
      finishExam(
        exam.mode === 'chapter' ? 'incomplete' : 'fail',
        exam.mode === 'chapter'
          ? 'You ended this chapter practice before answering all 30 questions.'
          : 'You ended this attempt before completing the question set.'
      );
    }
  });

  $('answer-list').addEventListener('keydown', (event) => {
    if (!exam || exam.feedbackShown) return;

    const key = event.key.toUpperCase();
    const index = LETTERS.indexOf(key);

    if (index >= 0) {
      const option = $('answer-list').children[index];

      if (option) {
        event.preventDefault();
        option.click();
      }
    }
  });
}

init();