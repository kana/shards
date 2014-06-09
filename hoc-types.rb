class Card; end

module Princess; end
module Support; end
module Authority; end
module Land; end
module Action; end
module Attack; end
module Defense; end
module Misfortune; end

class Butler < Card
  include Action
  # ...
end

class SnowSpirit < Card
  include Action
  include Attack
  # ...
end

class ImperialSpace < Card
  include Authority
  include Land
  # ...
end
